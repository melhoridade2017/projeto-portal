$(document).ready(function(){
    //editar usuario
    $(document).on("click","#btEdit",function(){ 
        
        var id = $(this).attr('name');
        var usuario = $("#editusuario" + id).val();
        var senha = $("#editsenha" + id).val();
        var status = $("input[name=editstatus" + id + "]:checked").val();

        if(usuario != "" && senha != "") { 
            $.ajax({
	            method: "POST",
	            data: {'username': usuario, 'senha': senha, 'status': status},
	            url: "http://localhost:4000/altera/usuario/" + id
            }).done(function( data ) {
	            if (data.affectedRows>0){
	                /*$("#editusuario").val("");
	                $("#editsenha").val("");*/
	                
	                $('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Usuário <strong>' + usuario + '</strong> alterados.</div>').appendTo('.resp');
	                window.setTimeout("location.reload()",4000);

	            }else{
	                $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Usuário <strong>' + usuario + '</strong> não foram alterados.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
	            }
        	});

        }else{
            $('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo usuário/senha em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
        }

    });
});