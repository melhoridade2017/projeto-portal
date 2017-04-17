$(document).ready(function(){
	//preenche select com menus

    $.ajax({
      method: "GET",
      url: "http://localhost:4000/menu"
    }).done(function( data ) {
      
      var vselect = "";
      var id = $('#id_menu').val();

	  $('#selmenu'+id).append('<option value=""></option>');

      $.each(data, function(i){ 
      	if ((data[i].id)==id)
      		vselect = "selected";
      	
      	$('#selmenu'+id).append('<option value="' + data[i].id + '" ' + vselect + '>' + data[i].texto + '</option>');
      });
    });

});