// importando la libreria http para crear un servidor web
const http = require('http');

function responderPeticion(request,response){

  response.end('Hola soy el modulo http')
}

let server = http.createServer(responderPeticion);

// Poner a la escucha nuestro servidor....no se recomienda usar el puerto 80
server.listen(3000);
