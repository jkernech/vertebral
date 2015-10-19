module.exports = function(grunt) {
    grunt.initConfig({
        'copy': {
            normalize: {
                src: 'css/normalize.css/normalize.css',
                dest: 'scss/normalize.scss'
            }
        },
        'sass': {
            development: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/vertebral.css': 'scss/vertebral.scss',
                    'css/vertebral-ios.css': 'scss/themes/ios.scss',
                    'css/vertebral-material.css': 'scss/themes/material.scss',
                    'css/vertebral-wp.css': 'scss/themes/wp.scss'
                }
            },
            production: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'css/vertebral.min.css': 'scss/vertebral.scss',
                    'css/vertebral-ios.min.css': 'scss/themes/ios.scss',
                    'css/vertebral-material.min.css': 'scss/themes/material.scss',
                    'css/vertebral-wp.min.css': 'scss/themes/wp.scss'
                }
            }
        },
        'watch': {
            options: {
                livereload: false,
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['compile'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('compile', ['copy:normalize', 'sass']);
    grunt.registerTask('default', ['compile', 'watch']);
};