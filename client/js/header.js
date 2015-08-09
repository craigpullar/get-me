if(Meteor.isClient) {
	Template.header.page_title = function() {
		return page_title;
	}
}