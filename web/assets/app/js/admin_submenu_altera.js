$(document).ready(function(){
    //editar submenu
    $(document).on("click","#btEdit",function(){ 
        
        var id = $(this).attr('name');
        var texto = $("#edittexto" + id).val();
        var url = $("#editurl" + id).val();
        var idmenu = $("#selmenu" + id + " option:selected").val();

        if(texto != "" && url != "" && idmenu != "") { 
            $.ajax({
	            method: "POST",
	            data: {'texto': texto, 'url': url, 'idmenu': idmenu},
	            url: "http://localhost:4000/altera/submenu/" + id
            }).done(function( data ) {
	            if (data.affectedRows>0){
	                
	                $('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Submenu <strong>' + texto + '</strong> alterados.</div>').appendTo('.resp');
	                window.setTimeout("location.reload()",4000);

	            }else{
	                $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Submenu <strong>' + texto + '</strong> não foram alterados.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
	            }
        	});

        }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo texto/url/menu em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
        }

    });
});