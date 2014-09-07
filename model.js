
Schools = new Meteor.Collection('schools');

Courses = new Meteor.Collection('courses');

CourseEquivelents = new Meteor.Collection('courseEquivelents');




Meteor.methods({
  // createGroup: function (groupName) {
  //   var group = Groups.findOne({groupName: groupName});

  //   if (group) {
  //     return group._id;
  //   }
  //   else {
  //     return Groups.insert({
  //       creator: this.userId,
  //       createdAt: (new Date()),
  //       groupName: groupName,
  //       members: [this.userId]
  //     });
  //   }
  // },


});

