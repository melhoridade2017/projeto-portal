var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/noticias', require('./noticias/index'));
router.get('/fotos', require('./fotos/index'));

module.exports = router;