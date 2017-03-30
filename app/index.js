var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/equipe', require('./equipe/equipe'));
router.get('/noticias', require('./noticias/index'));
router.get('/fotos', require('./fotos/index'));
router.get('/produto_cadeirarodas', require('./produto_cadeirarodas/index'));

module.exports = router;