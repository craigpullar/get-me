if (Meteor.isClient) {


	// $('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });

	console.log('main.js loaded');

	var menu_open = false;

	Template.header.events({
		'click div#menu-icon' : function(event){
			console.log('menu icon clicked');
			// $('#side-menu').fadeToggle();
			if (!menu_open) {

				$('#side-menu').velocity("transition.slideLeftIn", {
					begin: function(){
						$('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });
						menu_open = true;
					}
				});

			} else {

				$('#side-menu').velocity("transition.slideLeftOut", {
					duration: 100,
					complete: function(){
						menu_open = false;
					}
				});

			} // end else





			// $('#side-menu').velocity("transition.slideLeftIn", {
			// 	complete: function(){
			// 		$('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });
			// 	}
			// });


}
});


}
