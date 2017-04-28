//carrega tarefa para o Js
module.exports = function (gulp, plugins) {
  //retorna a tarefa quando for chamada
  return function () {
    gulp.src('./assets/app/js/**/*.js')
    .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./assets/js'))
  };
};
