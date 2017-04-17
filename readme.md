## Instalação Melhor Idade

Para começar a implementar o projeto, siga os passos abaixo.


* Clonar o projeto do GitHub
	`git clone https://github.com/melhoridade2017/projeto-portal.git`

* Verificar se está dentro da pasta do projeto para instalar os plugns necessários
	`cd /var/www/projeto-portal`

* Startar todos os plugns que o projeto clonado possui
	`npm update --dev`

* Instalar Gulp
	`npm install -g gulp`

* Instalar Nodejs
	`npm rum node --dev`

* Instalar Bower
	`bower install`

* Startar servidor local
	`npm run dev-node`

### Criação de novas páginas

Para começar a edição de uma nova página dentro do projeto você deverá seguir os passos abaixo.

- Pasta App:
  - Criar pasta com o nome desejado
  - Dentro desta nova pasta, criar arquivo index.js
  - Utilizar o arquivo index.js da nova pasta para chamar o HTML da página que irá trabalhar utilizando o código `var Service = function(req, res) {
    res.render('nomedapasta/index');
};
module.exports = Service;`
  - Editar arquivo index.js da pasta App (não da nova pasta que você criou) para indicar a rota da página que irá trabalhar atravez do código
`router.get('/nomedapasta', require('./nomedapasta/index'));`

- Para criar o arquivo onde irá codar o HTML da página que irá trabalhar
	- Acesse assets/resources/views
	- Criar pasta com o nome desejado
	- Dentro desta nova pasta, criar arquivo index.mustache


- Para criar o arquivo onde irá codar o CSS da página que irá trabalhar
	- assets/app/css
	- Criar arquivo de css com o mesmo nome das pastas que você criou anteriormente;

- Para criar o arquivo onde irá codar o JavaScrip da página que irá trabalhar
	- assets/app/js
	- Criar arquivo js com o mesmo nome das pastas que você criou anteriormente;


### Criação do teste de app

Executar a instalação da plataforma WEB da seguinte maneira:

```
cordova platform add browser
```

E para realizar o teste no browser executar o comando:

```
cordova run
```

Para build nosso app utilizamos o comando:

```
cordova build
```
Este comando irá gerar uma pasta .zip dentro de `platforms/browser/build/package.zip`

Para gerarmos o instalador [phonegap build ](https://build.phonegap.com/), se loga, private upload e colocamos o zip que está dentro da pasta acima
