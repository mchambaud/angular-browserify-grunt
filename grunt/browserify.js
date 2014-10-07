module.exports = {
    debug: {
        options: {
            watch: true,
            transform: ['debowerify'],
            browserifyOptions: {
                debug: true
            }
        },
        files: {
            '<%= directory.bin %>/app.js': [
                '<%= directory.src %>/app/**/*.js',
                '<%= directory.bin %>/templates.js'
            ]
        }
    }
}