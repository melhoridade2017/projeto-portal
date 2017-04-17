$(document).ready(function(){
	//preenche select com banners

    $.ajax({
      method: "GET",
      url: "http://localhost:4000/banner"
    }).done(function( data ) {
      
      var vselect = "";
      var id = $('#id_banner').val();

	  $('#selbanner'+id).append('<option value=""></option>');

      $.each(data, function(i){ 
      	if ((data[i].id)==id)
      		vselect = "selected";
      	
      	$('#selbanner'+id).append('<option value="' + data[i].id + '" ' + vselect + '>' + data[i].titulo + '</option>');
      });
    });

  });