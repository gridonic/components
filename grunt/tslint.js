const files = { src: '<%= src %>/js/src/**/*.ts' };

module.exports = {
    options: {
        // can be a configuration object or a filepath to tslint.json
        configuration: 'tslint.json',
        force: false
    },
    dev: {
        options: {
            force: true
        },
        files
    },
    dist: {
        files
    }
};
