(function () {
    module.exports = function (grunt) {
        grunt.registerTask('serve', 'Compile then start a connect web server', function () {
            grunt.task.run([
                'connect:dev',
                'watch'
            ]);
        });
    };
}());