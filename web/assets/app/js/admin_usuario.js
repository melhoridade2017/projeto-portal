$(document).ready(function(){
	//seleciona todos os usuarios
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/usuario"
    }).done(function( data ) {
      var row = "";
      var status = "";
      $.each(data, function(i){
        
        //LINHA TABELA
        row = '<tr id="tr' + data[i].id + '">';

        //USUARIO
        row += '<td>' + data[i].username + '</td>';
          
          //STATUS
          status = "Ativo";
          if (data[i].status==0)
            status = "Inativo";
        row += '<td>' + status + '</td>';

        //EDITAR
        row += '<td><a class="btn btn-warning btn-md" id="editar" data-toggle="modal" href="#m' + data[i].id + '">Editar</a>';

          row += '<div id="m' + data[i].id + '" class="modal fade" role="dialog">';
            row += '<div class="modal-dialog">';

              //-- FORMULARIO --
              row += '<!-- Modal content-->';
              row += '<div class="modal-content">';
                row += '<div class="modal-header">';
                  row += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
                  row += '<h4 class="modal-title">Usuário - Editar</h4>';
                row += '</div>';
                row += '<div class="modal-body">'; 
                  //USUARIO                   
                  row += '<div class="form-group">';
                    row += '<label for="editusuario">Usu&aacute;rio</label>';
                    row += '<input type="text" id="editusuario' + data[i].id + '" class="form-control" value="' + data[i].username + '" placeholder="Usu&aacute;rio">';
                  row += '</div>';
                  //SENHA
                  row += '<div class="form-group">';
                    row += '<label for="editsenha">Senha</label>';
                    row += '<input type="password" id="editsenha' + data[i].id + '" class="form-control" value="' + data[i].senha + '" placeholder="Senha">';
                  row += '</div>';
                  //STATUS
                  row += '<div class="form-group">';
                    row += '<label for="editstatus">Status</label><br />';
                    row += '<input type="radio" name="editstatus' + data[i].id + '" class="radio-inline" value="1" '; 
                      if (data[i].status=='1')
                        row += 'checked';
                    row +='> Ativo&nbsp;&nbsp;';
                    row += '<input type="radio" name="editstatus' + data[i].id + '" class="radio-inline" value="0" ';
                      if (data[i].status=='0')
                        row += 'checked';
                    row += '> Inativo';
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
        
        $('#tbusuario tbody').append(row); //adiciona linha na tabela

      });//fim each
    });//data
});