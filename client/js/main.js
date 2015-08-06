if (Meteor.isClient) {


	// $('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });

	console.log('main.js loaded');


	Template.header.events({
		'click div#menu-icon' : function(event){
			console.log('menu icon clicked');
			// $('#side-menu').fadeToggle();
			$('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });
			
		}
	});


}
