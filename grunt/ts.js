module.exports = {
    options: {
        verbose: true,
        inlineSourceMap: true,
        inlineSources: true,
        declaration: true,
        rootDir: '<%= src %>/js',
        target: 'es5'
    },
    default: {
        src: ['<%= src %>/js/**/*.ts'],
        outDir: '<%= dest %>/js'
    }
};
