var express = require('express');
var router  = express.Router();

// Rota para o site
router.get('/', require('./login/index'));
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
router.get('/localizacao', require('./localizacao/index'));

router.get('/footer', require('./modulos/footer'));
router.get('/menu_admin', require('./modulos/menu_admin'));
router.get('/header', require('./modulos/header'));

module.exports = router;