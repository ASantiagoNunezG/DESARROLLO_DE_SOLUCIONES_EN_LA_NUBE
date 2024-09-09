const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index');
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

app.use('/', indexRoutes);
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});