var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/equipe', require('./equipe/equipe'));
router.get('/noticias', require('./noticias/index'));
<<<<<<< HEAD
router.get('/servicos', require('./servicos/index'));
=======
router.get('/fotos', require('./fotos/index'));
router.get('/instalacoes', require('./instalacoes/index'));
router.get('/cadeira_de_rodas', require('./cadeira_de_rodas/index'));
>>>>>>> 17ff1dc71bfcb73b257aff4d2209537718ddf27a

module.exports = router;