if (Meteor.isClient) {

	browseController = baseController.extend({
		show: function() {
			Session.set('page_title','browse');
			this.render('browse', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}