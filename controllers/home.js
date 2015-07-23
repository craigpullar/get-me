
if (Meteor.isClient) {
  ApplicationController = RouteController.extend({
    layoutTemplate: 'AppLayout',

    onBeforeAction: function () {
      console.log('app before hook!');
      this.next();
    },

    action: function () {
      console.log('this should be overridden!');
    }
  });

  homeController = ApplicationController.extend({
    action: function () {

      this.render('Home', {
        data: {title: 'Get me app'}
      });
      
    }
  });

}