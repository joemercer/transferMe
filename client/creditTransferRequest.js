

Template.courseEquivelencySearch.schools = function() {
  return Schools.find().fetch().map(function(it){
    return it.name;
  });
};

// Template.schoolSearch.events({
//   // 'typeahead:selected .typeahead': function (e, Template) {
//   //   debugger;

//   //   // var uWaterlooId = tmpl.find('#uWaterlooId').value;

//   //   // Meteor.loginWithUWaterlooId(uWaterlooId);
//   // }
// });

Template.courseEquivelencySearch.homeSchool = function(e, s, d) {
  if (!s) {
    return;
  }
  var school = Schools.findOne({
    name: s.value
  });
  debugger;
  console.log(school);
  return s.value;
};

Template.courseEquivelencySearch.exchangeSchool = function(e, s, d) {
  if (!s) {
    return;
  }
  var school = Schools.findOne({
    name: s.value
  });
  console.log(school);
  return s.value;
};

Template.courseEquivelencySearch.results = function() {
  // debugger;
  // this.data;

  return CourseEquivelents.find({
    // homeSchool: ,
    // exchangeSchool: 
  });
};

Template.courseEquivelencySearch.events({

});




Template.courseEquivelencyInput.events({
  'click .add-course-equivelency': function(e, Template) {

    // validate data
    var homeSchoolName = $('.input-home-school-name').val();
    var homeSchoolCourseCode = $('.input-home-school-course-code').val();
    var homeSchoolCourseDescription = $('.input-home-school-course-description').val();
    
    var exchangeSchoolName = $('.input-exchange-school-name').val();
    var exchangeSchoolCourseCode = $('.input-exchange-school-course-code').val();
    var exchangeSchoolCourseDescription = $('.input-exchange-school-course-description').val();

    // validate home school
    var homeSchool = Schools.findOne({
      name: homeSchoolName
    });
    if (!homeSchool) {
      homeSchool = Schools.insert({
        name: homeSchoolName,
        courses: []
      });
    }
    else {
      homeSchool = homeSchool._id;
    }

    // validate home school course
    var homeSchoolCourse = Courses.findOne({
      school: homeSchool,
      name: homeSchoolCourseCode
    });
    if (!homeSchoolCourse) {
      var homeSchoolCourse = Courses.insert({
        school: homeSchool,
        name: homeSchoolCourseCode,
        description: homeSchoolCourseDescription
      });

      // update homeSchool courses
      Schools.update({_id: homeSchool}, {
        $push: { courses: homeSchoolCourse }
      });
    }
    else {
      homeSchoolCourse = homeSchoolCourse._id;
    }

    // validate exchange school
    var exchangeSchool = Schools.findOne({
      name: exchangeSchoolName
    });
    if (!exchangeSchool) {
      exchangeSchool = Schools.insert({
        name: exchangeSchoolName,
        courses: []
      });
    }
    else {
      exchangeSchool = exchangeSchool._id;
    }

    // validate exchange school course
    var exchangeSchoolCourse = Courses.findOne({
      school: exchangeSchool,
      name: exchangeSchoolCourseCode
    });
    if (!exchangeSchoolCourse) {
      exchangeSchoolCourse = Courses.insert({
        school: homeSchool,
        name: homeSchoolCourseCode,
        description: homeSchoolCourseDescription
      });

      // update exchangeSchool courses
      Schools.update({_id: exchangeSchool}, {
        $push: { courses: exchangeSchoolCourse }
      });
    }
    else {
      exchangeSchoolCourse = exchangeSchoolCourse._id;
    }

    // validate course equivelency
    var courseEquivelent = CourseEquivelents.findOne({
      homeSchool: homeSchool,
      homeSchoolCourse: homeSchoolCourse,
      exchangeSchool: exchangeSchool,
      exchangeSchoolCourse: exchangeSchoolCourse
    });
    if (!courseEquivelent) {
      courseEquivelent = CourseEquivelents.insert({
        homeSchool: homeSchool,
        homeSchoolCourse: homeSchoolCourse,
        exchangeSchool: exchangeSchool,
        exchangeSchoolCourse: exchangeSchoolCourse,
        pending: true,
        accepted: false
      });
    }
    else {
      courseEquivelent = courseEquivelent._id;
    }

  }
});









Meteor.startup(function(){
  // initializes all typeahead instances
  Meteor.typeahead.inject();

  // $('.typeahead').on('typeahead:selected', function (obj, datum) {
  //     console.log(obj);
  //     console.log(datum);
  // });
});