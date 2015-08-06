if (Meteor.isClient) {

	homeController = baseController.extend({
		show: function() {
			this.render('home', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('side-menu', {to: 'side-menu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
			console.log('mans at home');
		}
	});

}