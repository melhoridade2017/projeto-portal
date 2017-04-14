$( document ).ready(function() {
   $(".cadastrar-pagina").submit(function(event){
     event.preventDefault();
     var url = $("#url").val();
     var titulo = $("#titulo").val();
     var conteudo_pagina = $("#conteudo").val();
     if(url != "" && titulo != "" && conteudo_pagina != "") {
       $.ajax({
         method: "POST",
         data: {'url': url, 'titulo': titulo, 'conteudo_pagina': conteudo_pagina},
         url: "http://localhost:4000/inserir/pagina/"
       }).done(function( data ) {
         var id = data.insertId;
         if(id) {
           $("#url").val("");
           $("#titulo").val("");
           $("#conteudo").val("");
           $('<div class="alert alert-success msg" role="alert">Cadastro da pagina <strong>' + titulo + '</strong> efetuado</div>').appendTo('.cadastrar-pagina').delay(3000).fadeTo("slow", 0, function() { $(this).remove(); });
         }
       });
     } else {
       $('<div class="alert alert-danger msg" role="alert">Favor preencher todos os campos</div>').appendTo('.cadastrar-pagina').appendTo('.cadastrar-pagina').delay(3000).fadeTo("slow", 0, function() { $(this).remove(); });
     }
   });
 });
