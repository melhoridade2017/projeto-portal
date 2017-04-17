$(document).ready(function(){
    //editar imagem banner
    $(document).on("click","#btEdit",function(){ 
        
        var id = $(this).attr('name');
        var url = $("#editurl" + id).val();
        var alt = $("#editalt" + id).val();
        var idbanner = $("#selbanner" + id + " option:selected").val();

        if(url != "" && alt != "" && idbanner != "") { 
            $.ajax({
	            method: "POST",
	            data: {'url': url, 'alt': alt, 'idbanner': idbanner},
	            url: "http://localhost:4000/altera/imgbanner/" + id
            }).done(function( data ) {
	            if (data.affectedRows>0){
	                
	                $('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados da Imagem do Banner <strong>' + titulo + '</strong> alterados.</div>').appendTo('.resp');
	                window.setTimeout("location.reload()",4000);

	            }else{
	                $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados da Imagem do Banner <strong>' + titulo + '</strong> não foram alterados.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
	            }
        	});

        }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo url/alt/banner em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
        }

    });
});