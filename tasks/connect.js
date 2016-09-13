(function () {
    var path = require('path');

    module.exports = function (grunt) {
        console.log('<%= appConfig.src %>')
        grunt.config.merge({
            connect: {
                options: {
                    port: 8080,
                    livereload: 35730,
                    hostname: '127.0.0.1'
                },
                dev: {
                    options: {
                        base: [
                            '<%= appConfig.root %>',
                            '<%= appConfig.src %>',
                            '<%= appConfig.resources %>'
                        ],
                        open: true,
                        port: 8081
                    }
                },
                docs: {
                    options: {
                        base: [
                            '<%= appConfig.root %>build/docs/'
                        ],
                        port: 8082,
                        open: true
                    }
                },
                protractor: {
                    options: {
                        base: [
                            '<%= appConfig.root %>build/docs/'
                        ],
                        port: 8080
                    }
                }
            }
        });
    }
}());