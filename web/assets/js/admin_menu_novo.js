$(document).ready(function(){$("#btNew").click(function(){var e=$("#newtexto").val(),o=$("#newurl").val();""!=e&&""!=o?$.ajax({method:"POST",data:{texto:e,url:o},url:"http://localhost:4000/inserir/menu"}).done(function(o){o.insertId?($("#newtexto").val(""),$("#newurl").val(""),$('<div class="alert alert-success msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Menu <strong>'+e+"</strong> efetuado</div>").appendTo(".resp").delay(4e3).fadeTo("slow",0,function(){$(this).remove()})):$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Cadastro do Menu <strong>'+e+"</strong> não efetuado</div>").appendTo(".resp").delay(4e3).fadeTo("slow",0,function(){$(this).remove()})}):$('<div class="alert alert-danger msg col-xs-12 col-ms-12 col-md-12 col-lg-12" role="alert">Campo texto/url em branco.</div>').appendTo(".resp").delay(4e3).fadeTo("slow",0,function(){$(this).remove()})})});