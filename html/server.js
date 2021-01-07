const express = require('express');
const app = express();
//utilizando archivos estaticos a travez de la ruta /public con los archivos incluido en la carpeta assets
// primer string -> Ruta de acceso a travez del navegador
// segundo strin -> Nombre de la carpeta de archivos estaticos
app.use('/public',express.static('assets'));

app.get('/',function(req,res){
res.sendFile('index.html',{
    // variable que nos ayuda a definir la ruta absoluta de nuestro html 
    // aun cuando movamos el proyecto __dirname buscara la ruta donde se esta ejecutando este proyecto
    root: __dirname
});
});

app.listen(3000);