if(Meteor.isClient) {
	Template.header.helpers ({
		"page_title" :function() {
			return Session.get('page_title');
		}
	});

}