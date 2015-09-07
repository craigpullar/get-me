if (Meteor.isClient){

	Template.card.helpers({
		templateGestures: {
			'swiperight .card': function(e,t) {
				e.preventDefault();
				$(e.target).parent('.card').addClass('swipe-right');
			},
			'swipeleft .card': function(e, t) {
				e.preventDefault();
				$(e.target).parent('.card').addClass('swipe-left');

			}
		}

	});
	
}