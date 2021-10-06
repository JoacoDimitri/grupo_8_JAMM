//CONST Y REQUIRE
const express = require('express');
const app = express(); 
const path = require('path');
const methodOverride = require('method-override');
const session = require ('express-session');
const cookies = require ('cookie-parser');
const mainRoutes = require ("./routes/mainRoutes"); 
const productsRoutes = require ("./routes/productsRoutes");
const usersRoutes = require ("./routes/usersRoutes");

const userLoggedMiddleware = require ("./middlewares/userLoggedMiddleware");

//USE
app.use(express.static ("../public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session({
    secret:'Esto es un secreto',
    resave: false,
    saveUninitialized: false,
}));
//va siempre ANTES de app.use de session
app.use(userLoggedMiddleware);
app.use (cookies());

//SET
app.set("view engine" , "ejs");
app.set("public", path.join(__dirname, "public"));
app.set('views', path.join(__dirname, 'views'));

//revisar ruta
app.use("/", mainRoutes);
app.use("/", productsRoutes);
app.use("/", usersRoutes);

app.listen(3010, ()=>{
    console.log('Servidor funcionando');
});