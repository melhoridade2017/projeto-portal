$(document).ready(function(){ 
    //deletar imagem banner
    $(document).on("click","#btDel",function(){ 
      if (confirm("Tem certeza que deseja excluir imagem do banner?")){

        var id = $(this).attr('name');

        $.ajax({
          method: "POST",
          url: "http://localhost:4000/deletar/imgbanner/" + id
        }).done(function( data ) {
          if (data.affectedRows>0){
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Imagem do Banner excluída.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });

            alert ('Imagem do Banner excluída.');
            $('#tr' + id).remove(); //remove linha da imagem excluida
          }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Imagem do Banner não localizada.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });            
          }

        });
      }
      return false;
    });
});