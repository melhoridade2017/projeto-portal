$(document).ready(function(){ 
    //deletar menu
    $(document).on("click","#btDel",function(){ 
      if (confirm("Tem certeza que deseja excluir menu?")){

        var id = $(this).attr('name');

        $.ajax({
          method: "POST",
          url: "http://localhost:4000/deletar/menu/" + id
        }).done(function( data ) {
          if (data.affectedRows>0){
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Menu excluído.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });

            alert ('Menu excluído.');
            $('#tr' + id).remove(); //remove linha do menu excluido
          }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Menu não localizado.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });            
          }

        });
      }
      return false;
    });
});