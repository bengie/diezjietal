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
    compass: {
      dist: {
          options: {
              httpPath: '/',
              cssDir: '<%= path.css %>',
              sassDir: '<%= path.sass %>',
              imagesDir: '<%= path.img %>',
              javascriptsDir: '<%= path.js %>',
              outputStyle: 'compressed', // change to `compressed` for production - `expanded` for dev
              environment: 'production', // change to `production` for production - `development` for dev
              relativeAssets: true,
              noLineComments: false, // change to `true` for production
              trace: true,
              require: 'susy' // load Compass plugins
          }
      }
    },
    jekyll: {
        server: {
            server: true,
            server_port: 8000,
            auto: true,
            dest: './_site',
            src: '.'
            // excludes are configured in _config.yml
        },
        drafts: {
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
            tasks: ['compass']
        }

    }
  });

  // Do the necessary tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
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
    'compass',
    // 'uglify',
    // 'concat',
    'watch'
  ]);

  grunt.registerTask('draft', [
      'bgShell:jekylldraft',
      'compass',
      // 'uglify',
      // 'concat',
      'watch'
    ]);

};