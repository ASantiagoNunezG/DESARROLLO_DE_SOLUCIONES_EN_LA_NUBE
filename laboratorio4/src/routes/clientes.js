const express = require('express');
const router = express.Router();
const clientes = require('../database/clientes.json');

router.get('/', (req, res) => {
    res.json(clientes);
});

module.exports = router;