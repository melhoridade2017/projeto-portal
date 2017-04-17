$(document).ready(function(){
	//insere menu
	$('#btNew').click(function(){
		var texto = $("#newtexto").val();
		var url = $("#newurl").val();
		
		if(texto != "" && url != "") { 
			$.ajax({
				method: "POST",
				data: {'texto': texto, 'url': url},
				url: "http://localhost:4000/inserir/menu"
			}).done(function( data ) {
				var id = data.insertId;
				if(id) {
					$("#newtexto").val("");
					$("#newurl").val("");

					$('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Menu <strong>' + texto + '</strong> efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}else{
					$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Menu <strong>' + texto + '</strong> não efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
					//console.log(data);
				}
			});

		}else{
			$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo texto/url em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
		}
	});

});