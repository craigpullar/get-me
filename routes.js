// Router.route('/', function () {
//   render the Home template with a custom data context
//   this.render('Home', {
//   	data: {title: 'Get me app'}
//  });
// });


Router.route('/', {
	controller: 'homeController',
	action: 'action'
});
