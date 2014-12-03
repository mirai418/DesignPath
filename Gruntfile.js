// var banner = '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // concatenate all of the existing file into one file.
    // concat: {
    //   js: {
    //     options: {
    //       separator: ";\n\n",
    //       sourceMap: true,
    //       sourceMapName: 'dist/<%= pkg.short %>.js.map',
    //       banner: banner
    //     },
    //     files: [{
    //       src: ['src/*.js', 'src/**/scripts/*.js', 'src/**/templates/*.js'],
    //       dest: 'dist/<%= pkg.short %>.js'
    //     }]
    //   },
    //   css: {
    //     options: {
    //       separator: "\n\n",
    //       sourceMap: true,
    //       sourceMapName: 'dist/<%= pkg.short %>.css.map',
    //       banner: banner
    //     },
    //     files: [{
    //       src: ['src/*.css', 'src/**/styles/*.css'],
    //       dest: 'dist/<%= pkg.short %>.css'
    //     }]
    //   }
    // },

    // minify concatenated files into a min file
    // uglify: {
    //   js: {
    //     options: {
    //       compress: {
    //         drop_console: true
    //       },
    //       preserveComments: 'some',
    //       mangle: false,
    //       sourceMap: '<%= pkg.short %>.min.js.map',
    //       sourceMapIn: 'dist/<%= pkg.short %>.js.map'
    //     },
    //     files: [{
    //       src: 'dist/<%= pkg.short %>.js',
    //       dest: 'dist/<%= pkg.short %>.min.js'
    //     }]
    //   }
    // },

    // cssmin: {
    //   css: {
    //     files: [{
    //       expand: true,
    //       src: ['dist/<%= pkg.short %>.css'],
    //       dest: '',
    //       ext: '.min.css'
    //     }]
    //   }
    // },

    // check JS for any obvious errors
    jshint: {
      files: ['Gruntfile.js', 'dev/**/*.js', '!dev/**/*.min.js'],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },

    // creates angular templates
    // ngtemplates: {
    //   asui: {
    //     cwd: 'src/',
    //     files: [
    //       {
    //         expand: true,
    //         src: '**/templates/*.html',
    //         dest: '',
    //         ext: '.js'
    //       },
    //     ],
    //     options:  {
    //       url: function (url) {
    //         return url.split("/").slice(2, url.length).join("/");
    //       }
    //     }
    //   }
    // },

    // create css from sass.
    sass: {
      full: {
        options: {
          style: 'nested',
        },
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/styles/*.scss'],
          dest: 'src',
          ext: '.css'
        }]
      },
      individual: {
        options: {
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: 'dev/',
          src: ['**/*.scss'],
          dest: 'dev/',
          ext: '.css'
        }]
      }
    },

    // creates an index.html by adding all the references from index.tpl.html
    includeSource: {
      options: {
        baseUrl: '/',
        basePath: 'dev/public'
      },
      index: {
        files: {
          'deploy/public/index.html': 'dev/public/index.tpl.html'
        }
      },
    },

    copy: {
      main: {
        files: [
          { expand: true, cwd: 'dev/', src: ['**', '!**/*.scss', '!**/*.ai'], dest: 'deploy' },
        ],
      },
    },

    // watch function keeps an eye on the directory and runs the task on change.
    watch: {
      src: {
        files: ['dev/**'],
        tasks: ['compile'],
        options: {
          spawn: false,
        },
      }
    },

    clean: ['deploy', '.sass-cache'],

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('compile', ['jshint', 'sass:individual', 'copy', 'includeSource']);
  // grunt.registerTask('compile', ['jshint', 'sass:individual', 'includeSource']);
  // grunt.registerTask('compile', ['jshint', 'ngtemplates', 'sass:individual', 'includeSource']);
  // grunt.registerTask('build', ['clean', 'compile', 'concat', 'uglify', 'cssmin']);
  grunt.registerTask('default', ["compile", "watch"]);

};