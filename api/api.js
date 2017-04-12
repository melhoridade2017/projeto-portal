var express    = require("express");
var mysql      = require('mysql');
var bodyParser  = require('body-parser');

var connection = mysql.createConnection({
    host     : 'sql10.freemysqlhosting.net',
    user     : 'sql10168513',
    password : 'YLruKlqEIA',
    database : 'sql10168513'
});
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));


connection.connect(function(err){
    if(!err) {
        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});

// insere usuario
app.post('/inserir/usuario', function (req, res) {
    var data = req.body;
    var sql = 'INSERT INTO usuarios (username,senha,status) VALUES(\''+data.username+'\', \''+data.senha+'\', \''+data.status+'\') ;';
    connection.query(sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuarios', 'sql': sql});
          } else {
            res.json(rows);
          }
    });
});




// Retorna usuario
app.get("/usuario",function(req,res){
    connection.query('select username,senha, status from usuarios;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/usuario/:id",function(req,res){
    var idUsuario = req.params.id;
    connection.query('select username,senha, status from usuarios where id = \''+idUsuario+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});


// Deletar usuario
app.post("/deletar/usuario/:id",function(req,res){
    var idUsuario = req.params.id;
    connection.query('DELETE FROM usuarios where id = \''+idUsuario+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera usuario
app.post("/altera/usuario/:id",function(req,res){
    var idUsuario = req.params.id;
    connection.query('UPDATE  usuarios  SET username="\''+data.username+'\'", senha="\''+data.senha+'\'", status="\''+data.status+'\'"  where id = \''+idUsuario+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});


/*app.post("/altera/usuario/:id",function(req,res){
    var idUsuario = req.params.id;
    connection.query('UPDATE  usuarios  SET username="\''+data.username+'\'", senha="\''+data.senha+'\'", status="\''+data.status+'\'"  where id = \''+idUsuario+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});*/


//----------------------------------------------------------//

app.post('/inserir/banner', function (req, res) {
    var data = req.body;
    var sql = 'INSERT INTO banner (titulo,subtitulo) VALUES(\''+data.titulo+'\', \''+data.subtitulo+'\') ;';
    connection.query(sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de banner', 'sql': sql});
          } else {
            res.json(rows);
          }
    });
});

app.get("/banner",function(req,res){
    connection.query('select titulo,subtitulo from banner;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/banner/:id",function(req,res){
    var idBanner = req.params.id;
    connection.query('select titulo,subtitulo from banner where id = \''+idBanner+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});


app.listen(4000);