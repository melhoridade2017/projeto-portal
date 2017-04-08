var URL = window.location.href;
var separaURL = URL.split(":");
var havaliaURL = separaURL[1];
var URLLimpa = havaliaURL.replace("//", "");

if(URLLimpa == 'localhost') {
  $("#footer_home").load("http://localhost:3000/footer_home");
  $("#footer").load("http://localhost:3000/footer");
  $("#banner").load("http://localhost:3000/banner");
  $("#menu").load("http://localhost:3000/menu");

  //area administrativa
  $("#header").load("http://localhost:3000/admin/header");
  $("#menu_admin").load("http://localhost:3000/admin/menu_admin");

} else {
  $("#footer_home").load("http://melhoridade.herokuapp.com/footer_home");
  $("#footer").load("http://melhoridade.herokuapp.com/footer");
  $("#banner").load("http://melhoridade.herokuapp.com/banner");
  $("#menu").load("http://melhoridade.herokuapp.com/menu");

  //area administrativa
  $("#header").load("http://melhoridade.herokuapp.com/admin/header");
  $("#menu_admin").load("http://melhoridade.herokuapp.com/admin/menu_admin");
}
