$(document).ready(function(){
	//seleciona todos os submenus
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/submenu"
    }).done(function( data ) {
      var row = "";
      
      $.each(data, function(i){        
 
        //LINHA TABELA
        row = '<tr id="tr' + data[i].id + '">';

        //TEXTO
        row += '<td>' + data[i].texto + '</td>';
          
        //URL
        row += '<td>' + data[i].url + '</td>';

        //MENU
        row += '<td>' + data[i].menu + '</td>';

        //EDITAR
        row += '<td><a class="btn btn-warning btn-md" id="editar" data-toggle="modal" href="#m' + data[i].id + '">Editar</a>';

          row += '<div id="m' + data[i].id + '" class="modal fade" role="dialog">';
            row += '<div class="modal-dialog">';

              //-- FORMULARIO --
              row += '<!-- Modal content-->';
              row += '<div class="modal-content">';
                row += '<div class="modal-header">';
                  row += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                  row += '<h4 class="modal-title">Submenu - Editar</h4>';
                row += '</div>';
                row += '<div class="modal-body">'; 
                  //TEXTO 
                  row += '<div class="form-group">';
                    row += '<label for="edittexto">Texto</label>';
                    row += '<input type="text" id="edittexto' + data[i].id + '" class="form-control" value="' + data[i].texto + '" placeholder="Texto">';
                  row += '</div>';
                  //URL
                  row += '<div class="form-group">';
                    row += '<label for="editurl">URL</label>';
                    row += '<input type="text" id="editurl' + data[i].id + '" class="form-control" value="' + data[i].url + '" placeholder="URL">';
                  row += '</div>';
                  //MENU 
                  row += '<div class="form-group">';
                    row += '<label for="selmenu">Menu</label>';
                    row += '<input type="hidden" id="id_menu" value="' + data[i].menu_id + '">';
                    row += '<select id="selmenu' + data[i].id + '" class="form-control" placeholder="Menu">';

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
         
        $('#tbsubmenu tbody').append(row); //adiciona linha na tabela

      });//fim each
    });//data
});