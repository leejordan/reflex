module.exports = function(grunt) {
  
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.initConfig({less: {
	  development: {
	    files: {
	      "css/reflex.css": "less/reflex.less"
	    }
	 },
	 production: {
		 options: {
			compress: true,
			yuicompress: true,
			optimization: 2
		 },
		files: {
		  "css/reflex.min.css": "less/reflex.less"
		}
   },
	docs: {
	  files: {
		 "docs/css/docs.css": "docs/less/docs.less"
	  }
  }
  }});
}