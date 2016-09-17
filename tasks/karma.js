(function () {
    'use strict';

    module.exports = function (grunt) {
        grunt.config.merge({
            karma: {
                unit: {
                    configFile: 'karma.conf.js',
                    port: 9999,
                    singleRun: true,
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    logLevel: 'ERROR'
                }
            }
        });
    };
}());