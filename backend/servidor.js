import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cythe'
});

conexion.connect(function (error) {
    if (error) {
        console.log("Error al conectar a la base de datos");
    } else {
        console.log("Conectado exitosamente");
    }
});

app.get('/obtenerProductos', (peticion, respuesta) => {
    const sql = "select * from productos";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.get('/obtenerCategorias', (peticion, respuesta) => {
    const sql = "select * from categorias";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.post('/acceso', (peticion, respuesta) => {
    const sql = "select * from usuarios1 where correo_electronico=? and contrasenia=SHA1(?)";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" });
            if (resultado.length > 0) {
                const token = jwt.sign({ usuario: resultado[0].correo_electronico }, 'clave_secreta', { expiresIn: '1d' });
                respuesta.cookie('token', token);
                return respuesta.json({ Estatus: "Correcto", usuario: token });
            } else {
                return respuesta.json({ Estatus: "Error", Error: "Usuario o contraseña incorrecta" });
            }
        });
});

//login como admin 

app.post('/acceso_admin', (peticion, respuesta) => {
    const sql = "select * from administradores where correo_electronico=? and contrasenia=SHA1(?)";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) return respuesta.json({ mensaje: "error en la consulta" });
            if (resultado.length > 0) {
                const token = jwt.sign({ usuario: resultado[0].correo_electronico }, 'clave_secreta', { expiresIn: '1d' });
                respuesta.cookie('token', token);
                return respuesta.json({ Estatus: "Correcto", usuario: token });
            } else {
                return respuesta.json({ Estatus: "Error", Error: "Usuario o contraseña incorrecta" });
            }
        });
});

app.post('/registrar', (peticion, respuesta) => {
    const sql = "INSERT INTO usuarios1 (correo_electronico, contrasenia) VALUES (?, SHA1(?))";
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia],
        (error, resultado) => {
            if (error) {
                return respuesta.json({ mensaje: "Error al registrar el usuario", error });
            }
            return respuesta.json({ Estatus: "Correcto" });
        });
});


//Mcategorias 


app.post('/agregarCategoria', (peticion, respuesta) => {
    const { nombre, descripcion } = peticion.body;
    const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
    conexion.query(sql, [nombre, descripcion], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar la categoría" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});

app.post('/eliminarCategoria', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM categorias WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar la categoría" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


//Mprod

app.post('/agregarProducto', (peticion, respuesta) => {
    const { nombre, descripcion } = peticion.body;
    const sql = "INSERT INTO productos (nombre, descripcion) VALUES (?, ?)";
    conexion.query(sql, [nombre, descripcion], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar el producto" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});

app.post('/eliminarProducto', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM productos WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar el producto" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


//Musuarios

app.get('/obtenerUsuarios', (peticion, respuesta) => {
    const sql = "select * from usuarios1";
    conexion.query(sql, (error, resultado) => {
        if (error) return respuesta.json({ mensaje: "error" });
        return respuesta.json({ mensaje: "exitoso", contenido: resultado });
    });
});

app.post('/agregarUsuario', (peticion, respuesta) => {
    const { correo_electronico, contrasenia } = peticion.body;
    const sql = "INSERT INTO usuarios1 (correo_electronico, contrasenia) VALUES (?, SHA1(?))";
    conexion.query(sql, [correo_electronico, contrasenia], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al agregar el usuario" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});

app.post('/eliminarUsuario', (peticion, respuesta) => {
    const { id } = peticion.body;
    const sql = "DELETE FROM usuarios1 WHERE id = ?";
    conexion.query(sql, [id], (error, resultado) => {
        if (error) {
            return respuesta.json({ Estatus: "Error", Error: "Error al eliminar el usuario" });
        }
        return respuesta.json({ Estatus: "Correcto" });
    });
});


app.listen(8081, () => {
    console.log("Servidor iniciado");
});





