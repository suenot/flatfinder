if (Meteor.isClient) {
  // $('document').ready(function(){
  //   $('.isvg').each(function(){
  //     $(this).load('/img/svg/' + $(this).data('icon') + '.svg').addClass($(this).data('icon'));
  //   });
  // });
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
