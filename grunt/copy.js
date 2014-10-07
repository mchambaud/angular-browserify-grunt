module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= directory.bin %>',
            src: ['**', '!templates.js'],
            dest: '<%= directory.dist %>'
        }]
    },
    html: {
        src: '<%= directory.src %>/index.html',
        dest: '<%= directory.dist %>/index.html'
    }
}