(function () {
    module.exports = function (grunt) {
        grunt.registerTask('test', 'Compile application', function () {
            grunt.task.run([
                'test:unit',
                'test:protractor'
            ]);
        });

        grunt.registerTask('test:unit', 'Compile application', function () {
            grunt.task.run([
                'karma'
            ]);
        });

        grunt.registerTask('test:protractor', 'Compile application', function () {
            grunt.task.run([
                'connect:protractor',
                'protractor'
            ]);
        });

    };
}());