if (Meteor.isClient) {

	homeController = baseController.extend({
		show: function() {
			this.render('card', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
			console.log('mans at home');
		}
	});

}