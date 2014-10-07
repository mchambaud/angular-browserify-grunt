module.exports = {
    options: {
        base: '<%= directory.src %>/app'
    },

    debug: {
        src: ['<%= directory.src %>/app/**/*.tpl.html'],
        dest: '<%= directory.bin %>/templates.js',
        module: '<%= package.name %>.templates'
    }
}