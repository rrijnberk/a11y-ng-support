module.exports = function(config) {
    config.set({
        basePath: './',
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-*/angular-*.js',
            'src/main/javascript/*.module.js',
            'src/main/javascript/*.js',
            'src/main/javascript/**/*.js',
            'src/test/unit/**/*.spec.js'
        ],

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        // coverage reporter generates the coverage
        reporters: ['junit', 'coverage', 'progress'],

        // the default configuration
        junitReporter: {
            outputDir: './results/reports/unit',
            outputFile: 'report.xml',
            useBrowserName: false
        },

        preprocessors: {
            './src/main/javascript/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            dir : 'results/coverage/unit',
            reporters: [
                { type: 'lcov', subdir: '/' }
            ]
        }
    });
};
