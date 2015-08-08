if (Meteor.isClient) {

	preferencesController = baseController.extend({
		show: function() {
			this.render('preferences', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}