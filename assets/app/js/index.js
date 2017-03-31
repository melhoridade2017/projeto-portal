$(document).ready(function(){
  var cep = null;

  $("#buscarEnderecoBTN").click(function(){
    var cep = $("#CEP").val();

    if(cep != "") {
      var buscaEndereco = new BuscaEndereco(cep);

      buscaEndereco.busca();
    }
  });


  function getYear(){
		return (new Date().getFullYear());
	}

	$('#year').html(getYear());
 
});
