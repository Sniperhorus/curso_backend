const express = require('express');

const app = express();

app.get('/',function(req,res){
res.send('Hola soy express amigos!');
});

app.listen(4200);