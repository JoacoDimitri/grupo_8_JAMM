const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});