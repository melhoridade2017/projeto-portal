$(document).ready(function(){
    //editar banner
    $(document).on("click","#btEdit",function(){ 
        
        var id = $(this).attr('name');
        var titulo = $("#edittitulo" + id).val();
        var subtitulo = $("#editsubtitulo" + id).val();

        if(titulo != "" && subtitulo != "") { 
            $.ajax({
	            method: "POST",
	            data: {'titulo': titulo, 'subtitulo': subtitulo},
	            url: "http://localhost:4000/altera/banner/" + id
            }).done(function( data ) {
	            if (data.affectedRows>0){
	                
	                $('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Banner <strong>' + titulo + '</strong> alterados.</div>').appendTo('.resp');
	                window.setTimeout("location.reload()",4000);

	            }else{
	                $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Banner <strong>' + titulo + '</strong> não foram alterados.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
	            }
        	});

        }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo título/subtítulo em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
        }

    });
});