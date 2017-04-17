$(document).ready(function(){

	//insere usuario
	$('#btNew').click(function(){
		var usuario = $("#newusuario").val();
		var senha = $("#newsenha").val();

		if(usuario != "" && senha != "") { 
			$.ajax({
				method: "POST",
				data: {'username': usuario, 'senha': senha},
				url: "http://localhost:4000/inserir/usuario"
			}).done(function( data ) {
				var id = data.insertId;
				if(id) {
					$("#newusuario").val("");
					$("#newsenha").val("");

					$('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Usuário <strong>' + usuario + '</strong> efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}else{
					$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Usuário <strong>' + usuario + '</strong> não efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}
			});

		}else{
			$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo usuário/senha em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
		}
	});

});