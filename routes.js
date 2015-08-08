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

Router.route('/card-template', {
	controller: 'developmentController',
	action: 'card'
});

Router.route ('/footer', {
	controller: 'developmentController',
	action: 'footer'
});
