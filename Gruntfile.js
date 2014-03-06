module.exports = function(grunt) {

  grunt.initConfig({
    simplemocha: {
      files: ['test/**/*_test.js']
    },
    watch: {
      all: {
        files: ['**/*.js'],
        tasks: ['simplemocha']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.registerTask('default', ['simplemocha']);

};
