var URL = window.location.href;
var separaURL = URL.split(":");
var havaliaURL = separaURL[1];
var URLLimpa = havaliaURL.replace("//", "");

if(URLLimpa == 'localhost') {
  $("#footer").load("http://localhost:3000/footer");
  $("#banner").load("http://localhost:3000/banner");
  $("#menu").load("http://localhost:3000/menu");
} else {
  $("#footer").load("http://melhoridade.herokuapp.com/footer");
  $("#banner").load("http://melhoridade.herokuapp.com/banner");
  $("#menu").load("http://melhoridade.herokuapp.com/menu");
}
