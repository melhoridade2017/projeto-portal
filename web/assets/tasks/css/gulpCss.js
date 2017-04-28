//carrega a tarefa do css
module.exports = function (gulp, plugins) {
  //retorna a tarefa quando chamada
  return function () {
    gulp.src('./assets/app/css/**/*.css')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.cleanCss({compatibility: 'ie8'}))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./assets/css'));
  };
};
