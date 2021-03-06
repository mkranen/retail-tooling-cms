module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-web-server');

  var jsFiles = [
    'src/js/jquery.grideditor.js',
    'src/js/*.js',
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      js: {
        src: jsFiles,
        dest: 'dist/jquery.grideditor.js',
      },
    },

    uglify: {
      build: {
        options: {
          sourceMap: true,
        },
        src: jsFiles,
        dest: 'dist/jquery.grideditor.min.js',
      }
    },

    less: {
      development: {
        files: [{
            cwd: 'src/less/',
            src: [
              '*.less',
              '!shop.less'
            ],
            dest: 'dist/',
            ext: '.css',
            expand: true,
        }]
      },
      developmentPdp: {
        files: [{
            cwd: 'src/less/',
            src: [
              'shop.less'
            ],
            dest: 'dist/',
            ext: '.css',
            expand: true,
        }]
      }
    },

    cssmin: {
      development: {
        files: {
          'dist/grideditor.min.css' : ['dist/grideditor.css'],
          'dist/shop.min.css' : ['dist/shop.css'],
        }
      }
    },

    watch: {
      stylesheets: {
        files: ['*.html', 'src/**/*', 'example/*', 'sample_content/*.html', 'dist/shop.js', 'admin/*.html', ],
        tasks: ['concat:js', 'uglify', 'less'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },

    web_server: {
      options: {
        cors: true,
        port: 8000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar' // For some reason an extra key with a non-object value is necessary
    },
  });

  grunt.registerTask('default', ['concat:js', 'uglify', 'less']);

};
