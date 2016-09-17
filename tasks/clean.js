(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            clean: {
                dist: {
                    src: '<%= appConfig.dist %>'
                },
                results: {
                    src: 'results'
                }
            }
        });
    }
}());