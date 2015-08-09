if (Meteor.isClient) {

	searchController = baseController.extend({
		show: function() {
			page_title = 'Search';
			this.render('search', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}