(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            jshint:{
                all: ['Gruntfile.js', '<%= appConfig.src %>/*.js', '<%= appConfig.src %>/**/*.js'],
                options: {
                    loopfunc: true
                }
            }
        });
    };
}());