var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./home/index'));
router.get('/blog', require('./blog/index'));
router.get('/equipe', require('./equipe/equipe'));
router.get('/noticias', require('./noticias/index'));
router.get('/servicos', require('./servicos/index'));
router.get('/fotos', require('./fotos/index'));
router.get('/instalacoes', require('./instalacoes/index'));
router.get('/duvidas', require('./duvidas/index'));
router.get('/quem-somos', require('./quem-somos/index'));
router.get('/produto_cadeirarodas', require('./produto_cadeirarodas/index'));
router.get('/produto_bengala', require('./produto_bengala/index'));
router.get('/cadeiras_rodas_w', require('./cadeiras_rodas_w/index'));
router.get('/footer', require('./modulos/footer'));
router.get('/banner', require('./modulos/banner'));
router.get('/menu', require('./modulos/menu'));
router.get('/localizacao', require('./localizacao/index'));

module.exports = router;