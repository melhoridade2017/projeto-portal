//carrega a tarefa para otimizar as imgs
module.exports = function (gulp, plugins) {
  //retorna a tarefa quando chamada
  return function () {
    gulp.src('./assets/app/img/**/*')
    .pipe(plugins.imagemin())
    .pipe(gulp.dest('./assets/img'));
  };
};
