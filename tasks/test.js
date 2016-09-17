(function () {
    module.exports = function (grunt) {
        grunt.registerTask('test', 'Compile application', function () {
            grunt.task.run([
                'eslint',
                'karma'
            ]);
        });
    };
}());