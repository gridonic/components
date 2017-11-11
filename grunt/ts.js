const files = ['<%= src %>/js/src/tonic.ts'];

module.exports = {
    options: {
        verbose: true,
        moduleResolution: 'node',
        inlineSourceMap: true,
        inlineSources: true,
        lib: ['dom', 'es6'],
        strict: true,
        target: 'es6',
        rootDir: '<%= src %>/js/src',
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        removeComments: true,
        preserveConstEnums: true,
        suppressImplicitAnyIndexErrors: false
    },
    dev: {
        src: files,
        outDir: 'build/dev'
    },
    lib: {
        options: {
            module: 'commonjs',
            declaration: true,
            declarationDir: '<%= dest %>/dts'
        },
        src: files,
        outDir: '<%= dest %>/lib'
    },
    es: {
        options: {
            module: 'es6'
        },
        src: files,
        outDir: '<%= dest %>/es'
    },
    amd: {
        options: {
            module: 'amd'
        },
        src: files,
        outDir: '<%= dest %>/amd'
    }
};
