module.exports = function(grunt) {
  grunt.initConfig({
    karma: {
			options: {
				configFile: 'test/karma-conf.js'
			},
			unit: {
				singleRun: true
			},
			continuous: {
				background: true
			}
    },
    stryker: {
        local: {
            options: {
                configFile: 'stryker.conf.js'
            }
        }
    }
  });

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-stryker');
	grunt.registerTask('test', ['karma:unit:start']);

};