const express = require('express');
const app = express();

//motor de vistas
// primer parametro indica que usaremos un motor de vistas, segundo el nombre del motor
//todas las vistas van dentro de la carpeta views
app.set('view engine','ejs');

//utilizando archivos estaticos a travez de la ruta /public con los archivos incluido en la carpeta assets
// primer string -> Ruta de acceso a travez del navegador
// segundo strin -> Nombre de la carpeta de archivos estaticos
app.use('/public',express.static('assets',{
  // etag y maxAge es una propiedad que ayuda a la cache saber si el archivo fue modificado o no hanilitandolo o poniendo un tiempo para que sea esta la respueta
  // en lugar de ir al servidor
  etag: false,
  maxAge: '5h'
}));


app.get('/',function(req,res){

    res.render('index');
//res.sendFile('index.html',{
    // variable que nos ayuda a definir la ruta absoluta de nuestro html 
    // aun cuando movamos el proyecto __dirname buscara la ruta donde se esta ejecutando este proyecto
  //  root: __dirname
//});
});

app.listen(3000);