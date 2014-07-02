module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
   connect: {
    server: {
      options: {
        port: 8080,
        base: '.'
      }}},
   watch: {
	  configFiles: {
		files: [ 'Gruntfile.js', 'config/*.js' ],
		options: {
		reload: true
		}},
      livereload: {
        files: ['*.html', '*.css', '*.js'],
        options: {
          livereload: true
        }}},
   open : {
    dev : {
      path: 'http://localhost:8080/example.html'
    },
    build : {
      path : 'http://google.com/',
      app: 'Firefox'
    },
    file : {
      path : '/etc/hosts'
    },
    custom: {
      path : function () {
        return grunt.option('path');
      }}}
  });
  
  grunt.registerTask('default', ['connect', 'open:dev', 'watch']);
}