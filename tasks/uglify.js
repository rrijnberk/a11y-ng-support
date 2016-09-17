(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            uglify: {
                options: {
                    mangle: false,
                    sourceMap: true
                },
                default: {
                    files: {
                        '<%= appConfig.dist %>/a11y-ng-support.min.js': '<%= appConfig.dist %>/a11y-ng-support.js'
                    }
                }
            }
        });
    }
}());