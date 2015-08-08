// Router.route('/', function () {
//   render the Home template with a custom data context
//   this.render('Home', {
//   	data: {title: 'Get me app'}
//  });
// });


Router.route('/', {
	controller: 'homeController',
	action: 'show'
});


Router.route('/bootstrap', {
	controller: 'miscellaneousController',
	action: 'bootstrap'
});

Router.route('tag', {
	controller: 'developmentController',
	action: 'tag'
});

Router.route ('/footer', {
	controller: 'developmentController',
	action: 'footer'
});
Router.route ('/search', {
	controller: 'searchController',
	action: 'show'
});
Router.route ('/browse', {
	controller: 'browseController',
	action: 'show'
});
Router.route ('/hot', {
	controller: 'hotController',
	action: 'show'
});
Router.route ('/map', {
	controller: 'mapController',
	action: 'show'
});
Router.route ('/outlet', {
	controller: 'outletController',
	action: 'show'
});
Router.route ('/preferences', {
	controller: 'preferencesController',
	action: 'show'
});
