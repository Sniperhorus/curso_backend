const express = require('express');

// importar la libreria body-parser (el nombre debe coincider con la descarga ->  npm install body-parser)
const bodyParser = require('body-parser');

const app = express();

// Pidiendo a express que utilice el analizador para leer una peticion
// para leer el cuerpo de una peticion que venga con el formato urlencoded
app.use( bodyParser.urlencoded({extended: true}));

app.get('/saludo',function(req,res){
//res.send('Hola soy express amigos!');
// Template strings
// backstrips permite incrustar codigo JS (Interpolacion)
res.send(`Hola ${req.query.name}`);
// peticion -> http://localhost:4200/saludo?name=mauricio
});

app.post('/',function(req,res){
    res.send(`Hola ${req.body.name}`);
});
app.listen(4200);