module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Paths
    path: {
        css: 'css',
        img: 'img',
        js: 'js',
        jsSrc: 'js/src',
        jsDist: 'js/dist',
        sass: 'sass'
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name pkg.version %>\n' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                'Copyright <%= grunt.template.today("yyyy") pkg.url %>\n' +
                'Author: <%= pkg.author %>*/\n'
      },
      build: {
        src: '<%= path.jsSrc %>/main.js',
        dest: '<%= path.jsDist %>/main.js'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= path.jsSrc %>/*.js'],
        dest: '<%= path.jsDist %>/main.min.js'
      }
    },
    sass: {
      dist: {
          options: {
            style: 'nested', // nested | compact | compressed | expanded
            lineNumbers: true,
            debugInfo: true
          },
          files: [{
            expand: true,
            cwd: '<%= path.sass %>',
            src: ['*.scss'],
            dest: '<%= path.css %>',
            ext: '.css'
          }]
      }
    },
    jekyll: {
        server: {
            server: true,
            server_port: 8001,
            auto: true,
            dest: './_site',
            src: '.'
            // excludes are configured in _config.yml
        },
        drafts: {
          server: true,
          server_port: 8001,
          auto: true,
          dest: './_site',
          src: '.',
          drafts: true
        }
    },
    imageoptim: {
      // these paths should match directories
      files: [
        './img'
      ],
      options: {
        // also run images through ImageAlpha.app before ImageOptim.app
        imageAlpha: true,
        // also run images through JPEGmini.app after ImageOptim.app
        jpegMini: false,
        // quit all apps after optimisation
        quitAfter: true
      }
    },
    bgShell: {
      _defaults: {
          bg: true
      },
      jekyll: {
          cmd: 'grunt jekyll'
      },
      jekylldraft: {
          cmd: 'grunt jekyll:drafts'
      }
    },
    watch: {
        options: { livereload: false },
        compass: {
            files: ['<%= path.sass %>/*.scss','<%= path.sass %>/**/*.scss'],
            tasks: ['sass']
        }

    }
  });

  // Do the necessary tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bg-shell');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-imageoptim');


  // Default task(s).
  grunt.registerTask('default', [
    // jekyll needs to be run in the background else it blocks the terminal
    'bgShell:jekyll',
    'sass',
    // 'uglify',
    // 'concat',
    'watch'
  ]);

  grunt.registerTask('draft', [
      'bgShell:jekylldraft',
      'sass',
      // 'uglify',
      // 'concat',
      'watch'
    ]);

};
