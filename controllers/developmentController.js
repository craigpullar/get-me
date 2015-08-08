if (Meteor.isClient) {
  // this is basically base controller right?
  // this is the firrst time RouteController has been defined, unless its predefined by Iron routes
  //                                            vvvvvv
  developmentController = RouteController.extend({
  	layoutTemplate: 'DevelopmentLayout',

  	onBeforeAction: function () {
  		this.next();
  	},

  	action: function () {
  		console.log('this should be overridden!');
  	},

  	card : function() {
  		this.render('card', {to: 'content'});
  		this.render('card-style', {to: 'style'});
  	},
    footer : function() {
      this.render('footer', {to:'content'});
      this.render('footer-style', {to: 'style'});
    },
    tag : function() {
      this.render('tag', {to:'content'});
      this.render('tag-style', {to: 'style'});
    }
  });

}