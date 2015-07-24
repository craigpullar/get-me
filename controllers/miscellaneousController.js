if (Meteor.isClient) {

	miscellaneousController = baseController.extend({
		bootstrap: function() {
			this.render('bootstrapp', {to: 'content'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
			console.log('mans bootstrapping');
		}
	});

}