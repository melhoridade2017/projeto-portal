$(document).ready(function(){
	//seleciona todos os banners
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/banner"
    }).done(function( data ) {
      var row = "";
      
      $.each(data, function(i){
        
        //LINHA TABELA
        row = '<tr id="tr' + data[i].id + '">';

        //TITULO
        row += '<td>' + data[i].titulo + '</td>';
          
        //SUBTITULO
        row += '<td>' + data[i].subtitulo + '</td>';

        //EDITAR
        row += '<td><a class="btn btn-warning btn-md" id="editar" data-toggle="modal" href="#m' + data[i].id + '">Editar</a>';

          row += '<div id="m' + data[i].id + '" class="modal fade" role="dialog">';
            row += '<div class="modal-dialog">';

              //-- FORMULARIO --
              row += '<!-- Modal content-->';
              row += '<div class="modal-content">';
                row += '<div class="modal-header">';
                  row += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                  row += '<h4 class="modal-title">Banner - Editar</h4>';
                row += '</div>';
                row += '<div class="modal-body">'; 
                	//TITULO 
                  row += '<div class="form-group">';
                    row += '<label for="edittitulo">Título</label>';
                    row += '<input type="text" id="edittitulo' + data[i].id + '" class="form-control" value="' + data[i].titulo + '" placeholder="Título">';
                  row += '</div>';
                  //SUBTITULO
                  row += '<div class="form-group">';
                    row += '<label for="editsubtitulo">Subtítulo</label>';
                    row += '<input type="text" id="editsubtitulo' + data[i].id + '" class="form-control" value="' + data[i].subtitulo + '" placeholder="Subtítulo">';
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
          row += '&nbsp;&nbsp;<a class="btn btn-danger" id="btDel" name="'+ data[i].id +'">Excluir</a>';

        //FIM LINHA TABELA
        row += '</td></tr>';
         
        $('#tbbanner tbody').append(row); //adiciona linha na tabela

      });//fim each
    });//data
});