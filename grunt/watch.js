module.exports = {
    options: {
        livereload: true
    },

    html: {
        files: ['<%= directory.src %>/index.html'],
        tasks: ['copy:html']
    },

    templates: {
        files: ['<%= directory.src %>/**/*.tpl.html'],
        tasks: ['html2js', 'copy:dist']
    },

    app: {
        files: ['<%= directory.bin %>/app.js'],
        tasks: ['copy:dist']
    }
}