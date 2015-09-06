if (Meteor.isClient){

	Template.card.helpers({
		templateGestures: {
			'swiperight .card': function(e,t) {
				e.preventDefault();
				$(e.target).parent().css('-webkit-transform', 'translate(100px,0)');
			},
			'swipeleft .card': function(e, t) {
				e.preventDefault();
				$(e.target).parent().css('-webkit-transform', 'translate(-100px,0)');

			}
		}

	});
	
}