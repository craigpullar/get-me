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
						$('#side-menu #welcome').delay('100').velocity("transition.slideUpIn");
						$('#side-menu ul li').delay('100').velocity("transition.slideLeftIn", { stagger: 100 });
						menu_open = true;
					}
				});

			} else {
				// HIDE MENU
				$('#side-menu').velocity("transition.slideLeftOut", {
					duration: 100,
					display: "none",
					complete: function(){
						menu_open = false;
						$('#welcome').hide();
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
