$(document).ready(function(){
	//seleciona todos os imagens-banners
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/imgbanner"
    }).done(function( data ) {
      var row = "";
      
      $.each(data, function(i){        
 
        //LINHA TABELA
        row = '<tr id="tr' + data[i].id + '">';

        //URL
        row += '<td>' + data[i].url + '</td>';
          
        //ALT
        row += '<td>' + data[i].alt + '</td>';

        //BANNER
        row += '<td>' + data[i].titulo + '</td>';

        //EDITAR
        row += '<td><a class="btn btn-warning btn-md" id="editar" data-toggle="modal" href="#m' + data[i].id + '">Editar</a>';

          row += '<div id="m' + data[i].id + '" class="modal fade" role="dialog">';
            row += '<div class="modal-dialog">';

              //-- FORMULARIO --
              row += '<!-- Modal content-->';
              row += '<div class="modal-content">';
                row += '<div class="modal-header">';
                  row += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                  row += '<h4 class="modal-title">Banner | Imagens - Editar</h4>';
                row += '</div>';
                row += '<div class="modal-body">'; 
                	//URL 
                  row += '<div class="form-group">';
                    row += '<label for="editurl">URL</label>';
                    row += '<input type="text" id="editurl' + data[i].id + '" class="form-control" value="' + data[i].url + '" placeholder="Título">';
                  row += '</div>';
                  //ALT
                  row += '<div class="form-group">';
                    row += '<label for="editalt">Alt</label>';
                    row += '<input type="text" id="editalt' + data[i].id + '" class="form-control" value="' + data[i].alt + '" placeholder="Subtítulo">';
                  row += '</div>';
                  //BANNER 
                  row += '<div class="form-group">';
                    row += '<label for="selbanner">Banner</label>';
                    row += '<input type="hidden" id="id_banner" value="' + data[i].banner_id + '">';
                    row += '<select id="selbanner' + data[i].id + '" class="form-control" placeholder="Banner">';

                    row += "</select>";
                  row += '</div>';
                  //SALVAR ALTERACOES
                  row += '<div class="form-group">';
                  row += '<button class="btn btn-primary" id="btEdit" name="' + data[i].id + '">Salvar alterações</button>';
                  row += '</div>';
                row += '</div>';
                //FIM -- FORMULARIO --

                //FECHAR
                row += '<div class="modal-footer">';
                  row += '<div class="resp">&nbsp;</div>';
                  row += '<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>';
                row += '</div>';
              row += '</div>';

            row += '</div>';
          row += '</div>';

          //EXCLUIR
          row += '&nbsp;&nbsp;<a class="btn btn-danger" id="btDel" name="' + data[i].id + '">Excluir</a>';

        //FIM LINHA TABELA
        row += '</td></tr>';
         
        $('#tbimgbanner tbody').append(row); //adiciona linha na tabela

      });//fim each
    });//data
});