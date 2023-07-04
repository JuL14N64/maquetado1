import express from 'express';

import mysql from 'mysql';

import cors from 'cors';

//crear la instancia express

const app=express();
app.use(cors());

//crear la conexion a la base de datos

const conexion=mysql.createConnection({
    server:'localhost',
    user:'root',
    password:'',
    database:'cythe' // nombre de la base de datos 
});

//verificamos las conexiones

conexion.connect(function(error){
    if(error){
        console.log("Error al conectar a la base de datos")
    } else {
        console.log("Conectado exitosamente");
    }
});

app.get('/obtenerProductos',(peticion, respuesta)=>{
    const sql="select * from productos";
    conexion.query(sql,(error,resultado)=>{
        if(error) return respuesta.json({mensaje:"error"});
        return respuesta.json({mensaje:"exitoso",contenido:resultado});
    })
});

// Iniciamos el servidor

app.listen(8081,()=>{
    console.log("servidor iniciado");
});