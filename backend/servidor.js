import express from 'express';

import mysql from 'mysql';

import cors from 'cors';

//crear la instancia express

const app = express();
app.use(cors());

//crear la conexion a la base de datos

const conexion = mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'cythe' // nombre de la base de datos 
});

//verificamos las conexiones

conexion.connect(function (error) {
    if (error) {
        console.log("Error al conectar a la base de datos")
    } else {
        console.log("Conectado exitosamente");
    }
});


//productos

app.get('/obtenerProductos', (peticion, respuesta) => {
    const sql = "select * from productos";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    })
});

//categorias

app.get('/obtenerCategorias', (peticion, respuesta) => {
    const sql = "select * from categorias";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    })
});

app.post('/acceso', (peticion, respuesta) => {
    const sql = "select * from usuarios where corro_electronico=? and contrasenia=?"
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" })
            if (resultado.length > 0) {
                const token = jwt.sign({ usuario: 'administrador' }, 'juan', { expiresIn: '1d' });
                respuesta.cookie(token);
                return respuesta.json({ Estatus: "Correcto", usuario: token })
            } else {
                return respuesta.json({ Estatus: "Error", Error: "Usuario o contraseña incorrecta" })
            }







        })
})

app.post('/registrar', (peticion, respuesta) => {
    const sql = "INSERT INTO usuarios(nombre_usuarios.correo_electronico,contrasenia) VALUES(?,?,sha1(?))";
    conexion.query(sql, [peticion.body.nombre_usuario, peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" });
            return respuesta.json({ Estatus: "Correcto" });


        })
})

// Iniciamos el servidor

app.listen(8081, () => {
    console.log("servidor iniciado");
});