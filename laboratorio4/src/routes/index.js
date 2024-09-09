const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Bienvenido a la aplicación Express');
});

module.exports = router;