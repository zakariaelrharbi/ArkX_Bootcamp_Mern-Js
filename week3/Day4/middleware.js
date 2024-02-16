const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send("Home page");
});
app.get('/users', (req, res) =>{
    res.send("Users Page")
});

app.listen(port, () =>{
    console.log(`listening on http://localhost:${port}`);
});