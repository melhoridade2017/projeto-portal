$(document).ready(function(){

	$('#btLogin').click(function(){
		var usuario = $('#usuario').val();
		var senha = $('#senha').val();

		if (usuario != "" && senha != ""){

			$.ajax({
				method: "GET",
				url: "http://localhost:4000/login/" + usuario + "/" + senha
			}).done(function(data){
				if (data[0].qtd>0){
					window.location.href = "http://localhost:3000/admin/home";
				}else{
					$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert"><strong>Acesso não permitido!</strong><br>Usuário e/ou Senha inválido.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}

			});
		}else{
			$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert"><strong>Acesso não permitido!</strong></div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
		}

	});
});