module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      default: {
        options: {
          paths: ["assets/css"]
        },
        files: {
          "assets/css/styles.css": "assets/less/styles.less"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less']);

};