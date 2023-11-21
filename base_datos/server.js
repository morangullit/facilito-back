const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize('proyecto-backend', null, null,{
    dialect: 'sqlite',
    storage: './proyecto-backend',
});

//let db = new sqlite3.Database('proyecto-backend');--------------------> crear una nueva table de base de datos sqlite3 que se puede ejucutar una unica ves.

//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT, description varchar(255))'); ------> crear table de base de datos sqlite3 se ejucuta una unica ves.

app.post('/pendientes', function (req, res) {
    db.run(`INSERT INTO tasks(description) VALUES(?)` , req.body.description);
    res.send('Insercion finalizada');
});

//db.close(); ------> cierra la base de datos sqlite3 se ejucuta una unica ves cuando se crea.

app.listen(3000);

// Esta funcion no se utiliza cuando utilizamos sequelize
/* process.on('SIGINT', function (){
    console.log('Adios - Att. el servidor');
    db.close();
    process.exit(); //----------> este instruccion te permite cerrar el servidor de node
}); */