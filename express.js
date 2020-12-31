const express = require('express');

const app = express();

app.get('/saludo',function(req,res){
//res.send('Hola soy express amigos!');
// Template strings
res.send(`Hola ${req.query.name}`);

});

app.listen(4200);