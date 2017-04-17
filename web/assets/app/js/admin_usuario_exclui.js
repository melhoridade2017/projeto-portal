$(document).ready(function(){
    //deletar usuario
    $(document).on("click","#btDel",function(){ 
      if (confirm("Tem certeza que deseja excluir usuário?")){

        var id = $(this).attr('name');

        $.ajax({
          method: "POST",
          url: "http://localhost:4000/deletar/usuario/" + id
        }).done(function( data ) {
          if (data.affectedRows>0){
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Usuário excluído.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });

            alert ('Usuário excluído.');
            $('#tr' + id).remove(); //remove linha do usuario excluido
          }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Usuário não localizado.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });            
          }

        });
      }
      return false;
    });
});