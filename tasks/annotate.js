(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            ngAnnotate: {
                all: {
                    files: {
                        '<%= appConfig.dist %>/a11y-ng-support.js' : ['<%= appConfig.dist %>/a11y-ng-support.js']
                    }
                }
            }
        });
    };
}());