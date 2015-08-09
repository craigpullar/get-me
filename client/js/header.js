if(Meteor.isClient) {
	Template.header.helpers ({
		"page_title" :function() {
			return page_title;
		}
	});
	
}