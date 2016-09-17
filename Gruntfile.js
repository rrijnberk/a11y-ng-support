(function (){
    'use strict';

    var path = require('path'),
        root = path.resolve('./'),
        build = path.resolve(root, 'build'),
        results = path.resolve(root, 'results'),
        coverage = path.resolve(results, 'coverage'),
        reports = path.resolve(results, 'reports');


    module.exports = function (grunt) {
        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);
        require('connect-livereload')();

        grunt.initConfig({
            appConfig : {
                dist: path.resolve(root, 'dist'),
                resources: path.resolve(root, 'src', 'main', 'resources'),
                src: path.resolve(root, 'src', 'main', 'javascript')
            }
        });

        // Load tasks from ./tasks folder
        grunt.loadTasks('tasks');
    };
}());
