const express = require('express');
const app = express();
const users = require('./user.json');
const bcrypt = require('bcrypt');
const session = require('express-session')
const fs = require('fs').promises;
const {body, validationResult} = require('express-validator');
const store = new session.MemoryStore();
app.use(express.json());
app.use(session({
    secret: "welcome",
    cookie:{
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
        sameSite: false
    },
    resave: false,
    saveUninitialized: false,
    store
}))
// register phase 
app.post('/register',[
    body ("username").isLength({min: 5, max: 15}).notEmpty().trim().escape(),
    body ("password").isLength({min: 8, max: 15}).notEmpty().trim().escape(),
], async(req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json('username and password are not correct, Try again')
    }
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        username: username,
        password: hashedPassword,
    }
    users.push(newUser);
    await fs.writeFile('./user.json', JSON.stringify(users))
    res.json(users);
})
// check if the user is authenticated
const IsAuthenticated = (req, res, next) =>{
    if(!req.session){
        return res.status(400).json('you are not authenticated !');
    }
    next();
}

app.get('/protected', IsAuthenticated, (req, res) =>{
    res.json(`Welcome`);
})
// login phase
app.post('/login', [
    // valid the username and the password
    body ("username").isLength({min: 5, max: 15}).notEmpty().trim().escape(),
    body ("password").isLength({min: 8, max: 15}).notEmpty().trim().escape(),
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty){
        return res.status(400).json('username and password are not correct, Try again')
    }
    const {username, password} = req.body;
    const target = users.find(u => u.username == username)
    if(!target){
        return res.status(400).json('username does not exist');
    }
    const user = await bcrypt.compare(password, target.password);
    if(!user){
        return res.status(400).json('password incorrect !');
    }
    res.status(200).json('login successufuly !');
})
// logout phase / destroy the coockies 
app.get('/logout', (req, res) => {
    res.clearCookie('connect.sid');
    req.session.destroy((err) => {
        if(err) {
            console.error('Error destroying session:', err);
            return res.status(500).json('internal server error')
        }
        res.json('logged out sucess');
    })
})

const port = 3000;
app.listen(port, (req, res) => {
    console.log(`listenning to http://localhost:${port}`);
});