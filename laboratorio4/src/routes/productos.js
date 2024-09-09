const express = require('express');
const router = express.Router();
const productos = require('../database/productos.json');

router.get('/', (req, res) => {
    res.json(productos);
});

module.exports = router;