$(document).ready(function(){$(document).on("click","#btEdit",function(){var o=$(this).attr("name"),e=$("#editusuario"+o).val(),a=$("#editsenha"+o).val(),s=$("input[name=editstatus"+o+"]:checked").val();""!=e&&""!=a?$.ajax({method:"POST",data:{username:e,senha:a,status:s},url:"http://localhost:4000/altera/usuario/"+o}).done(function(o){o.affectedRows>0?($('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Usuário <strong>'+e+"</strong> alterados.</div>").appendTo(".resp"),window.setTimeout("location.reload()",4e3)):$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Dados do Usuário <strong>'+e+"</strong> não foram alterados.</div>").appendTo(".resp").delay(4e3).fadeTo("slow",0,function(){$(this).remove()})}):$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo usuário/senha em branco.</div>').appendTo(".resp").delay(4e3).fadeTo("slow",0,function(){$(this).remove()})})});