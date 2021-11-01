
require('dotenv').config();

const express = require('express');
const  cors  = require ( 'cors' ) 

const { dbConnection } = require('./database/config');

// Crear el servidor Express
    const app = express();

// Configurar CORS
    app.use( cors() )
    
// Lectura y parseo del Body
app.use( express.json() );

// Base de datos
    dbConnection();
// MEAN_USER
// EFPtEEZ5e0dok4PX
 
// Rutas
app.use('/api/usuarios', require('./routes/usuarios') );
app.use('/api/login', require('./routes/auth') );


app.listen( process.env.PORT , () =>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
}); 