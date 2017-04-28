var Tasks = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    basePaths: {
        css: './assets/app/css/**/*.css',
        js: './assets/app/js/**/*.js',
        img: './assets/app/img/**/*'
    },
    getTask: function (path, task)
    {
        return require(`./${path}/gulp${task}.js`)(this.gulp, this.plugins);
    }
}

module.exports = Tasks;
