module.exports = function(grunt) {

  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'compressed'
        },
        files: {                         // Dictionary of files 
          'css/main.css': 'sass/main.scss'       // 'destination': 'source'
        }
      }
    },
    autoprefixer:{
      prefix: {
        src: ['css/main.css']
      }
    },
    uglify: {
      bower_js_files: {
        files: {
          'build/output.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'js/modernizr.js',
            'bower_components/vivus/dist/vivus.js'
          ]
        }
      }
    },
    jshint: {
      foo: {
        src: ['js/main.js']
      },
    },
    watch: {
      preprocessor: {
        files: ['sass/*.scss'],
        tasks: ['sass']
      },
      jschecking: {
        files: ['js/main.js'],
        tasks: ['jshint']
      }
    }
    
  });
 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  
  //grunt.registerTask('default', ['sass']);

};