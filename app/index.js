var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
<<<<<<< HEAD
router.get('/blog', require('./blog/index'));
=======
router.get('/equipe', require('./equipe/equipe'));
router.get('/noticias', require('./noticias/index'));
<<<<<<< HEAD
router.get('/duvidas', require('./duvidas/index'));
=======
router.get('/quem-somos', require('./quem-somos/index'));
router.get('/servicos', require('./servicos/index'));
router.get('/fotos', require('./fotos/index'));
<<<<<<< HEAD
router.get('/produto_cadeirarodas', require('./produto_cadeirarodas/index'));
=======
router.get('/instalacoes', require('./instalacoes/index'));
<<<<<<< HEAD
>>>>>>> d69148669c3a4bce6eaa19102595847df10767b5
=======
router.get('/cadeiras_rodas_w', require('./cadeiras_rodas_w/index'));

>>>>>>> 6949d0571410f536f055fafb8a265ddf4a14bb65
>>>>>>> wallace

module.exports = router;