const express = require("express");
const path = require("path");
const usuariosRutas = require("./routes/usuariosRutas");
const productosRutas = require("./routes/productosRutas");

const app = express();

// Configurar el motor de vistas y el directorio de vistas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, "web")));

// Middleware para manejar datos de formularios
app.use(express.urlencoded({ extended: true }));

// Rutas para usuarios
app.use("/", usuariosRutas);

// Rutas para productos
app.use("/productos", productosRutas);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});
