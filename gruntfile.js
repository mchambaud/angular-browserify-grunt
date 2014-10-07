module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        init: true,
        jitGrunt: true,
        data: {
            directory: {
                dist: 'dist',
                bin: 'bin',
                src: 'src'
            }
        }
    });

    grunt.registerTask('default', ['clean', 'html2js', 'browserify', 'copy', 'connect:server', 'watch']);
}