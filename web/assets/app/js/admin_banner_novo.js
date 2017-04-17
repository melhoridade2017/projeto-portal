$(document).ready(function(){

	//insere banner
	$('#btNew').click(function(){
		var titulo = $("#newtitulo").val();
		var subtitulo = $("#newsubtitulo").val();

		if(titulo != "" && subtitulo != "") { 
			$.ajax({
				method: "POST",
				data: {'titulo': titulo, 'subtitulo': subtitulo},
				url: "http://localhost:4000/inserir/banner"
			}).done(function( data ) {
				var id = data.insertId;
				if(id) {
					$("#newtitulo").val("");
					$("#newsubtitulo").val("");

					$('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Banner <strong>' + titulo + '</strong> efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}else{
					$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Banner <strong>' + titulo + '</strong> não efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}
			});

		}else{
			$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo titulo/subtitulo em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
		}
	});

});