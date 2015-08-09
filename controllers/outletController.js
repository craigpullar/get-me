if (Meteor.isClient) {

	outletController = baseController.extend({
		show: function() {
			Session.set('page_title','outlet');
			this.render('outlet', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}