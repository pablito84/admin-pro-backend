
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

// Directorio publico
    app.use( express.static('public') ) ;/// hace referencia a la carpeta Public
 
// Rutas
app.use('/api/usuarios', require('./routes/usuarios') );
app.use('/api/hospitales', require('./routes/hospitales') );
app.use('/api/medicos', require('./routes/medicos') );
app.use('/api/todo', require('./routes/busquedas') );
app.use('/api/login', require('./routes/auth') );
app.use('/api/upload', require('./routes/uploads') );


app.listen( process.env.PORT , () =>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
}); 