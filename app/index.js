var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/noticias', require('./noticias/index'));
router.get('/duvidas', require('./duvidas/index'));

module.exports = router;
