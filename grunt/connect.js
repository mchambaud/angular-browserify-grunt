var livereload = require('connect-livereload');

module.exports = {
    server: {
        options: {
            port: 8000,
            hostname: '*',
            debug: true,
            livereload: true,
            base: '<%= directory.dist %>',
            middleware: function (connect, options) {
                var middlewares = [];

                middlewares.push(livereload());

                options.base.forEach(function (base) {
                    middlewares.push(connect.static(base));
                });

                return middlewares;
            }
        }
    }
}