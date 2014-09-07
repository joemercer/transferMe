
Schools = {
  _schools: new Meteor.Collection('schools'),
  insert: function(name) {

    // check for duplicates, etc

    this._schools.insert({
      name: name,
      courses: []
    });
  }
};

Courses = {
  _courses: new Meteor.Collection('courses'),
  insert: function(schoolId, courseCode, description) {

    // check for duplicates, etc

    this._courses.insert({
      school: schoolId,
      courseCode: courseCode,
      description: description
    });
  }
};

CourseEquivelents = {
  _courseEquivelents: new Meteor.Collection('courseEquivelents'),
  insert: function(coursesA, coursesB) {

    // clean the data, put into arrays etc
    // check for dups

    this._courseEquivelents.insert({
      coursesA: courseA,
      coursesB: coursesB
    });
  }
};




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

