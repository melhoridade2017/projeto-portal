$(document).ready(function(){ 
    //deletar submenu
    $(document).on("click","#btDel",function(){ 
      if (confirm("Tem certeza que deseja excluir submenu?")){

        var id = $(this).attr('name');

        $.ajax({
          method: "POST",
          url: "http://localhost:4000/deletar/submenu/" + id
        }).done(function( data ) {
          if (data.affectedRows>0){
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Submenu excluído.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });

            alert ('Submenu excluído.');
            $('#tr' + id).remove(); //remove linha do submenu excluido
          }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Submenu não localizado.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });            
          }

        });
      }
      return false;
    });
});