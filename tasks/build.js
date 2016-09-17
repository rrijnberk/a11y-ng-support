(function () {
    module.exports = function (grunt) {
        grunt.registerTask('build', 'Compile application', function () {
            grunt.task.run([
                'clean',
                'test',
                'concat',
                'ngAnnotate',
                'uglify'
            ]);
        });

    }
}());