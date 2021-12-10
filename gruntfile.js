module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	//project configuration
	grunt.initConfig({
		uglify: {
			my_target: {
				options: {
					beautify: true
				},
				files: {
					"js/personal_website.js":["_/js/*.js"]
				}
			}
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}
			}
		}, //compass
		watch: {
			options: {
				livereload:false
			},
			script: {
				files: ["_/js/*.js"],
				tasks: ["uglify"]
			}, //script
			sass: {
				files: ["_/sass/*.scss","_/sass/partials/*.scss"],
				tasks: ["compass"]
			} //sass
			// html: {
			// 	files: ['*.html']
			// } //html
		} //watch
	}); //config

	// Default task(s).
	grunt.registerTask('default', ['watch']);





}// module