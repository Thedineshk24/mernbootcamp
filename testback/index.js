const express = require('express');

const app = express();
const port = 29;

app.get('/', (req,res) => res.send('i Love/Like u ayu,neha,neha'));
app.get('/ayu', (req,res) => res.send('hey ayu'));
app.get('/login',(req,res) => {
    return res.send('this is a LOGIN route'); 
});

const admin = (req,res) => {
    res.send('Welcome to ADMIN DASH BOARD');
}

const isAdmin = (req,res,next) => {
    console.log('isADMIN is Running')
    next();
}

const isLoggedin = (req,res,next) => {
    console.log('isLoggedIn is True');
    next();
}

app.get('/admin',isLoggedin,isAdmin,admin);
app.get('/signup', (req,res) => res.send('sign-up'));
app.listen(port, console.log(`listening from port no: ${port}`));