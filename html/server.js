const express = require('express');
const app = express();

app.get('/',function(req,res){
res.sendFile('index.html',{
    // variable que nos ayuda a definir la ruta absoluta de nuestro html 
    // aun cuando movamos el proyecto __dirname buscara la ruta donde se esta ejecutando este proyecto
    root: __dirname
});
});

app.listen(3000);