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
let erroPadrao = {'message': 'Parâmetros do EndPoint com erro!', 'status' : 403};



connection.connect(function(err){
    if(!err) {
        console.log("Database conectado ... \n\n");
    } else {
        console.log("Erro ao conectar ... \n\n");
    }
});

//----------------------------------------------------------//

// Login
app.get("/login/:usuario/:senha",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _usuario = req.params.usuario;
    let _senha = req.params.senha;

    connection.query('SELECT count(id) as qtd FROM usuarios WHERE username=\'' + _usuario + '\' AND senha=\'' + _senha + '\';', function(err, rows, fields) {
        res.json(rows);
    }); 
});

//----------------------------------------------------------//

// insere usuario
app.post('/inserir/usuario', (req, res) => {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let data = req.body;
    let nome = data.username;
    let senha = data.senha;

      if (nome != "" && senha != "") {

         let sql = 'INSERT INTO usuarios (username,senha) VALUES(\''+data.username+'\', \''+data.senha+'\') ;';
         connection.query(sql ,
         (err, rows, fields) => {

            if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de usuarios', 'sql': sql});
                  } else {
                      res.json(rows);
                    }
            });

            } else {
                console.log("BARRADO NA BALADA");
            }
});


// Retorna usuario
app.get("/usuario",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    connection.query('SELECT id,username,senha, status FROM usuarios;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/usuario/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    var idUsuario = req.params.id;
    connection.query('SELECT username,senha, status FROM usuarios WHERE id = '+idUsuario+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Deletar usuario
app.post("/deletar/usuario/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    var idUsuario = req.params.id;
    connection.query('DELETE FROM usuarios WHERE id = '+idUsuario+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera usuario
app.post("/altera/usuario/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let data = req.body;
    var idUsuario = req.params.id;
    connection.query('UPDATE  usuarios  SET username=\''+data.username+'\', senha=\''+data.senha+'\', status=\''+data.status+'\'  WHERE id = '+idUsuario+';', function(err, rows, fields) {
        res.json(rows);
    });
});

//----------------------------------------------------------//

//insere banner
app.post('/inserir/banner', function (req, res) {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _sql = 'INSERT INTO banner (titulo,subtitulo) VALUES(\''+_data.titulo+'\', \''+_data.subtitulo+'\') ;';
    connection.query(_sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de banner', 'sql': _sql});
          } else {
            res.json(rows);
          }
    });
});
 
//retorna banner
app.get("/banner",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    connection.query('SELECT id, titulo, subtitulo FROM banner;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/banner/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idBanner = req.params.id;
    connection.query('SELECT titulo, subtitulo FROM banner WHERE id = '+_idBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Deletar banner
app.post("/deletar/banner/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idBanner = req.params.id;
    connection.query('DELETE FROM banner WHERE id = '+_idBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera banner
app.post("/altera/banner/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _idBanner = req.params.id;
    connection.query('UPDATE  banner  SET titulo=\''+_data.titulo+'\', subtitulo=\''+_data.subtitulo+'\'  WHERE id = '+_idBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

//----------------------------------------------------------//

//insere imagem-banner
app.post('/inserir/imgbanner', function (req, res) {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _sql = 'INSERT INTO imagens_banner (URL,alt,banner_id) VALUES(\''+_data.url+'\', \''+_data.alt+'\', '+_data.idbanner+') ;';
    connection.query(_sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de imagens banner', 'sql': _sql});
          } else {
            res.json(rows);
          }
    });
});

//retorna imagem-banner
app.get("/imgbanner",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    connection.query('SELECT I.id, I.url, I.alt, I.banner_id, B.titulo FROM imagens_banner as I INNER JOIN banner as B ON I.banner_id = B.id;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/imgbanner/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idImgBanner = req.params.id;
    connection.query('SELECT I.url, I.alt, B.titulo FROM imagens_banner as I INNER JOIN banner as B ON I.banner_id = B.id WHERE I.id = '+_idImgBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Deletar imagem-banner
app.post("/deletar/imgbanner/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idImgBanner = req.params.id;
    connection.query('DELETE FROM imagens_banner WHERE id = '+_idImgBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera imagem-banner
app.post("/altera/imgbanner/:id",function(req,res){
    let _data = req.body;
    let _idImgBanner = req.params.id;
    connection.query('UPDATE  imagens_banner  SET url=\''+_data.url+'\', alt=\''+_data.alt+'\', banner_id=' +_data.idbanner+ '  WHERE id = '+_idBanner+';', function(err, rows, fields) {
        res.json(rows);
    });
});

//----------------------------------------------------------//

//insere menu
app.post('/inserir/menu', function (req, res) {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _sql = 'INSERT INTO menu (texto,url) VALUES(\''+_data.texto+'\', \''+_data.url+'\') ;';
    connection.query(_sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela de menu', 'sql': _sql});
          } else {
            res.json(rows);
          }
    });
});
 
//retorna menu
app.get("/menu",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    connection.query('SELECT id, texto, url FROM menu;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/menu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idMenu = req.params.id;
    connection.query('SELECT texto, url FROM menu WHERE id = '+_idMenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Deletar menu
app.post("/deletar/menu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idMenu = req.params.id;
    connection.query('DELETE FROM menu WHERE id = '+_idMenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera menu
app.post("/altera/menu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _idMenu = req.params.id;
    connection.query('UPDATE  menu  SET texto=\''+_data.texto+'\', url=\''+_data.url+'\'  WHERE id = '+_idMenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

//----------------------------------------------------------//

//insere submenu
app.post('/inserir/submenu', function (req, res) {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _sql = 'INSERT INTO sub_menu (texto, url, menu_id) VALUES(\''+_data.texto+'\', \''+_data.url+'\', '+_data.idmenu+') ;';
    connection.query(_sql ,
        function(err, rows, fields) {
          if(err) {
            res.json({'erro': 'Erro ao inserir os dados na tabela submenu', 'sql': _sql});
          } else {
            res.json(rows);
          }
    });
});

//retorna submenu
app.get("/submenu",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    connection.query('SELECT S.id, S.texto, S.url, S.menu_id, M.texto as menu FROM sub_menu as S INNER JOIN menu as M ON S.menu_id = M.id;', function(err, rows, fields) {
        res.json(rows);
    });
});

app.get("/submenu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idSubmenu = req.params.id;
    connection.query('SELECT S.texto, S.url, S.menu_id, M.texto as menu FROM sub_menu as S INNER JOIN menu as M ON S.menu_id = M.id WHERE S.id = '+_idSubmenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Deletar submenu
app.post("/deletar/submenu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idSubmenu = req.params.id;
    connection.query('DELETE FROM sub_menu WHERE id = '+_idSubmenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

// Altera submenu
app.post("/altera/submenu/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _data = req.body;
    let _idSubmenu = req.params.id;
    connection.query('UPDATE  sub_menu  SET texto=\''+_data.texto+'\', url=\''+_data.url+'\', menu_id=' +_data.idmenu+ '  WHERE id = '+_idSubmenu+';', function(err, rows, fields) {
        res.json(rows);
    });
});

//----------------------------------------------------------//


app.post('/inserir/pagina', function (req, res) {
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let data = req.body;

    //Varaiveis do insert de conteudo de pagina
    let _URL = data.url;
    let _TITULO = data.titulo;
    let _CONTEUDO_JSON = data.conteudo_pagina.trim();

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

app.get("/pagina/:id",function(req,res){
    liberarAcessoDeOutroDominio(res, 'http://localhost:3000');
    let _idPagina = req.params.id;
    let _sql = `SELECT titulo FROM pagina WHERE id = '${idPagina}';`;
    connection.query(_sql, (err, rows, fields) => {
      if(err){
        res.json({err});
      } else{
        let sqlConteudoPagina = `SELECT url, conteudo_json FROM conteudo_pagina WHERE pagina_id = '${idPagina}';`;

        //Executa a query de inserção de conteudo de pagina
        connection.query(sqlConteudoPagina,
          (err, rows, fields) => {
            if(err) {
              res.json({err});
            } else {
              res.json(rows);
            }
          });

      }
    });
});

var liberarAcessoDeOutroDominio = (res, dominio) => {
  res.setHeader('Access-Control-Allow-Origin', `${dominio}`);
  /*res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');*/
}
app.listen(4000);
