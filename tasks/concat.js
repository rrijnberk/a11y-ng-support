(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            concat: {
                options: {
                    banner: '(function(){\n',
                    separator: '\n})();\n\n(function () {\n',
                    footer: '\n}());'
                },
                production: {
                    src: [
                        '<%= appConfig.src %>/*.module.js',
                        '<%= appConfig.src %>/**/*.js'
                    ],
                    dest: '<%= appConfig.dist %>/a11y-ng-support.js'
                }
            }
        });
    };
}());