module.exports = {
    ts: {
        files: ['<%= src %>/js/src/**/*.ts'],
        tasks: ['tslint:dev', 'ts:dev']
    },
    sass: {
        files: ['<%= src %>/sass/src/**/*.scss'],
        tasks: ['sass']
    }
};
