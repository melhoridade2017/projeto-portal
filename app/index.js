var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
<<<<<<< HEAD
router.get('/blog', require('./blog/index'));
=======
router.get('/equipe', require('./equipe/equipe'));
router.get('/noticias', require('./noticias/index'));
router.get('/quem-somos', require('./quem-somos/index'));
router.get('/servicos', require('./servicos/index'));
router.get('/fotos', require('./fotos/index'));
<<<<<<< HEAD
router.get('/produto_cadeirarodas', require('./produto_cadeirarodas/index'));
=======
router.get('/instalacoes', require('./instalacoes/index'));
>>>>>>> d69148669c3a4bce6eaa19102595847df10767b5

module.exports = router;