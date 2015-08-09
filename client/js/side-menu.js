if (Meteor.isClient) {


	// $('#side-menu ul li').velocity("transition.slideLeftIn", { stagger: 100 });

	console.log('main.js loaded');

	var menu_open = false;

	Template.header.events({
		'click div#menu-icon, click #overlay' : function(event){
			toggleMenu();
		}
	});



	Template.AppLayout.helpers({
		templateGestures: {
			'swiperight #swipe': function(e, t) {
				e.preventDefault();
				toggleMenu();
			},
			'swipeleft #side-menu': function(e, t) {
				e.preventDefault();
				toggleMenu();
			}

			// 'pan #swipe': function(e, t){
			// 	e.preventDefault();
			// 	var Xpos = e.deltaX;
			// 	$('#swipe').css("left", Xpos);
			// 	console.log( e.deltaX);
			// 	// console.log( 'draggin');
			// }
		}

	});

	



	function toggleMenu(){

		console.log('menu icon clicked');
		$('#overlay').toggleClass('show');

			// $('#side-menu').fadeToggle();
			if (!menu_open) {

				$('#side-menu').velocity("transition.slideLeftIn", {
					duration: 400,
					begin: function(){
						$('#side-menu #welcome, #side-menu ul').delay('100').velocity("transition.slideUpIn", {
							visibility: "visible"
						});

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
						$('#side-menu #welcome, #side-menu ul').delay('100').velocity({opacity: 0}, {
							visibility: "hidden"
						});
						// $('#welcome').c();
					}
				});

			} // end else

		}

	}
