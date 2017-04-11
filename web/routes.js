module.exports.set = function(app) {
    app.use('/', require('./app'));
    app.use('/admin', require('./admin'));
};
