if (Meteor.isClient) {

	mapController = baseController.extend({
		show: function() {
			page_title = 'Map';
			this.render('map', {to: 'content'});
			this.render('head', {to: 'head'});
			this.render('sideMenu', {to: 'sideMenu'});
			this.render('header', {to: 'header'});
			this.render('footer', {to: 'footer'});
		}
	});

}