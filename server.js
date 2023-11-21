const http = require('http');

peticion = (req, res) => {
    res.end('hola de nuevo!!!')
}

let server = http.createServer(peticion);

server.listen(3000);