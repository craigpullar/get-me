if (Meteor.isClient) {

	hotController = baseController.extend({
		show: function() {
			Session.set('page_title','Whats hot');
			this.render('hot', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}