var express    = require("express");
var mysql      = require('mysql');
var bodyParser  = require('body-parser');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'melhoridade'
});
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
let erroPadrao = {'message': 'Parâmetros do EndPoint com erro!', 'status' : 403};

connection.connect(function(err){
    if(!err) {
        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});

app.post('/inserir/usuario', function (req, res) {
    var data = req.body;
    var sql = 'INSERT INTO usuario (username,senha,status) VALUES(\''+data.username+'\', \''+data.senha+'\', \''+data.status+'\') ;';
    connection.query(sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuario', 'sql': sql});
          } else {
            res.json(rows);
          }
    });
});

app.get("/usuario",function(req,res){
    connection.query('select username,senha, status from usuario;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/usuario/:id",function(req,res){
    var idUsuario = req.params.id;
    connection.query('select username,senha, status from usuario where id = \''+idUsuario+'\';', function(err, rows, fields) {
        res.json(rows);
    });
});

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


app.post('/inserir/pagina', function (req, res) {
    let data = req.body;

    //Varaiveis do insert de conteudo de pagina
    let _URL = data.url;
    let _TITULO = data.titulo;
    let _CONTEUDO_JSON = data.conteudo_json.trim();

    //Sql de inserção do conteúdo de página
    if( ( _URL != '' && _CONTEUDO_JSON != '' && _TITULO != '' ) ) {//verifica se os dados não estão vazio
      let sql = `INSERT INTO pagina (titulo) VALUES('${_TITULO}');`;//let serve para criar uma variavel 'de escopo local' e o ${nondeVariavel} serve para fazermos uma concatenação sem ter que ficar abrindo e fechando aspas, quando colocamos ela dento de aspas, estamos falando que vamos utilizar uma string, se deixarmos fora será um number

      //Executa a query da inserção de página
      connection.query(sql ,
          (err, rows, fields) => {
            if(err) {
              res.json({err});
            } else {//Caso não tenha dado erro ao inserir os dados de página
              let _ultimoInserido = rows.insertId;
              let sqlConteudoPagina = `INSERT INTO conteudo_pagina (url, conteudo_json, pagina_id) VALUES('${_URL}', '${_CONTEUDO_JSON}', ${_ultimoInserido});`;

              //Executa a query de inserção de conteudo de pagina
              connection.query(sqlConteudoPagina ,
                (err, rows, fields) => {
                  if(err) {
                    res.json({err});
                  } else {
                    res.json(rows);
                  }
                });

            }
      });
    } else {
      res.json(erroPadrao, erroPadrao.status);
    };
});

var executaQuery = (sql, req, res) => {
  connection.query(sql ,
    (err, rows, fields) => {
      if(err) {
        res.json({err});
      } else {
        callback(res.json(rows));
      }
    });
}

app.listen(4000);
