var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/menu', require('./modulos/menu'));
router.get('/footer_home', require('./modulos/footer_home'));
router.get('/footer', require('./modulos/footer'));
router.get('/banner', require('./modulos/banner'));
router.get('/', require('./home/index'));
router.get('/quem-somos', require('./quem-somos/index'));
router.get('/servicos', require('./servicos/index'));
router.get('/equipe', require('./equipe/equipe'));
router.get('/blog', require('./blog/index'));
router.get('/noticias', require('./noticias/index'));
router.get('/fotos', require('./fotos/index'));
router.get('/duvidas', require('./duvidas/index'));
router.get('/instalacoes', require('./instalacoes/index'));
router.get('/produto_bengala', require('./produto_bengala/index'));
router.get('/produto_cadeirarodas', require('./produto_cadeirarodas/index'));
router.get('/localizacao', require('./localizacao/index'));

module.exports = router;