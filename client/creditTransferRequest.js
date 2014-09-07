

Template.schoolSearch.schools = function() {
  return Schools._schools.find().fetch().map(function(it){
    return it.name;
  });
}

// if (Meteor.isClient) {
//   Template.hello.greeting = function () {
//     return "Welcome to creditTransferRequest.";
//   };

//   Template.hello.events({
//     'click input': function () {
//       // template data, if any, is available in 'this'
//       if (typeof console !== 'undefined')
//         console.log("You pressed the button");
//     }
//   });
// }

Meteor.startup(function(){
  // initializes all typeahead instances
  Meteor.typeahead.inject();
});