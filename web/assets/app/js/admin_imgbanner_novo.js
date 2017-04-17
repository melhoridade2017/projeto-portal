$(document).ready(function(){
	//insere imagem banner
	$('#btNew').click(function(){
		var url = $("#newurl").val();
		var alt = $("#newalt").val();
		var idbanner = $("#selbanner0 option:selected").val();

		if(url != "" && alt != "" && idbanner != "") { 
			$.ajax({
				method: "POST",
				data: {'url': url, 'alt': alt, 'idbanner': idbanner},
				url: "http://localhost:4000/inserir/imgbanner"
			}).done(function( data ) {
				var id = data.insertId;
				if(id) {
					$("#newurl").val("");
					$("#newalt").val("");
					$("#selbanner0").val("");

					$('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro da Imagem do Banner <strong>' + url + '</strong> efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
				}else{
					$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro da Imagem do Banner <strong>' + url + '</strong> não efetuado</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
					//console.log(data);
				}
			});

		}else{
			$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo url/alt/banner em branco.</div>').appendTo('.resp').delay(4000).fadeTo("slow", 0, function() { $(this).remove(); });
		}
	});

});