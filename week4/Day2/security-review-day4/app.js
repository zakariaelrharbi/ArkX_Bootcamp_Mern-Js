const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const csurf = require('csurf');
const {body , validationResult} = require("express-validator");
const jwt = require('jsonwebtoken');

const users = [
  { username: 'zakaria', password: 'zakaria2024' },
  { username: 'kilozerko32', password: 'kilozerko32' },
];

const app = express();
app.use(express.json())
// Middleware 5 ` 
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');
// app.use(csurf({ cookie: true }));

// Routes
app.get('/', (req, res) => {
  // res.render('index', { csrfToken: req.csrfToken() });
  res.render('index');
});

app.post('/login', [
  body("username").not().isEmpty().isLength({min :8}).trim().escape(),
  body("password").not().isEmpty().isLength({min :8}).trim().escape(),
],(req, res) => {
  let obj = validationResult(req);
  if(!obj.isEmpty()){
   return res.status(400).json({errors : obj.array()})
  }
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Successful authentication
    const token = jwt.sign({ user: user.id }, 'secret_key', { expiresIn: '2h' });

    res.json({ token });

  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
  
  // Validate and authenticate the user
  // Implement appropriate validation and secure authentication mechanisms here
  // For simplicity, you can use a hardcoded username and password for demonstration purposes
});
function ensureToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    const bearerToken = bearerHeader.split(' ')[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.get('/dashboard', ensureToken, (req, res) => {
  jwt.verify(req.token, 'secret_key', (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({ data });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
