//'use strict';
//(function () {
//		var path = "/static/hrii/portlets/vendor/lib/";
//		console.log(path);
//		debugger;
//	  // -- RequireJS config --
//	  require.config({
//	    // Packages = top-level folders; loads a contained file named 'main.js"
//	    packages: ['paycycleprocessing', 'payDataEntry'],
//	    shim: {
//
//	      // Hopefully this all will not be necessary but can be fetched from WebJars in the future
//	      'angular': {
//	        deps: ['jquery'],
//	        exports: 'angular'
//	      },
//	      'angular-route': ['angular'],
//	      'angular-cookies': ['angular'],
//	      'bootstrap': ['jquery']
//	    },
//	    paths: {
//	      'requirejs': path+'requirejs/lib/require',
//	      'jquery': path+'jquery/dist/jquery',
//	      'angular': path+'angular/angular',
//	      'angular-resource': path+'angular-resource/angular-resource',
//	      'angular-cookies': path+'angular-cookies/angular-cookies',
//	      'bootstrap': path+'bootstrap/dist/js/bootstrap.min'
//	    }
//	  });
//
//	  requirejs.onError = function (err) {
//	    console.log(err);
//	  };
//
//	  // Load the app. This is kept minimal so it doesn't need much updating.
//	  /*require(['angular', 'angular-cookies', 'angular-route', 'jquery', 'bootstrap', './payRollApp'],
//	    function (angular) {
//	      angular.bootstrap(document, ['payRollApp']);
//	    }
//	  );*/
//	})();
