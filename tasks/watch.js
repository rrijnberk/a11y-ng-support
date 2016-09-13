(function (){
    'use strict';

    module.exports = function(grunt) {
        grunt.config.merge({
            watch: {
                options: {
                    livereload: 35730
                },
                html: {
                    files: ['<%= appConfig.src %>/**/*.html', '<%= appConfig.resources %>/**/*.html']
                },
                js: {
                    files: ['<%= appConfig.src %>/*.js', '<%= appConfig.src %>/**/*.js']
                }
            }
        });
    }
}());