(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            eslint:{
                target: ['Gruntfile.js', '<%= appConfig.src %>/*.js', '<%= appConfig.src %>/**/*.js']
            }
        });
    };
}());