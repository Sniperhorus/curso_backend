const express = require('express');

const app = express();

app.get('/saludo',function(req,res){
//res.send('Hola soy express amigos!');
// Template strings
// backstrips permite incrustar codigo JS (Interpolacion)
res.send(`Hola ${req.query.name}`);
// peticion -> http://localhost:4200/saludo?name=mauricio
});

app.listen(4200);