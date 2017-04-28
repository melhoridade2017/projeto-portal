'use strict';
var gulp = require('gulp');
//estamos chamando o arquivo onde se encontra nossas tarefas
var tasks = require('./assets/tasks/tasks');


// Aqui chamanos o metodo para pegar as tafejas que estão dentro de tasks.js, no primeiro parametro chamamos o caminho, no segundo o nome da tarefa
gulp.task('css', tasks.getTask('css', 'Css'));
gulp.task('js', tasks.getTask('js', 'Js'));
gulp.task('img', tasks.getTask('img', 'Img'));

// Tarefa default de escuta (Watch) dos arquivos
gulp.task('default', ['css', 'js', 'img'], function () {
    gulp.watch(tasks.basePaths.css, ['css']);
    gulp.watch(tasks.basePaths.js, ['js']);
    gulp.watch(tasks.basePaths.img, ['img']);
});
