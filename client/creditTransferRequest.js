

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

Template.courseEquivelencySearch.homeSchoolCb = function(e, s, d) {
  var school = Schools.findOne({
    name: s.value
  });
  if (!school) {
    Session.set('homeSchool', null);
    return;
  }
  Session.set('homeSchool', school);
};

Template.courseEquivelencySearch.exchangeSchoolCb = function(e, s, d) {
  var school = Schools.findOne({
    name: s.value
  });
  if (!school) {
    Session.set('exchangeSchool', null);
    return;
  }
  Session.set('exchangeSchool', school);
};

Template.courseEquivelencySearch.showSearch = function() {
  var showSearch = Session.get('homeSchool') && Session.get('exchangeSchool');

  // if (showSearch) {
  //   $('.input-schools').slideUp();
  // }

  return showSearch;
}

Template.courseEquivelencySearch.hasResults = function() {
  return Session.get('hasResults');
}

// Template.courseEquivelencySearch.rendered = function() {
//   // set the starting session variables
//   // !!! probably don't want to do this in the actual app
//   Session.set('homeSchool', Schools.findOne({
//     name: 'UWaterloo'
//   }));
//   Session.set('exchangeSchool', Schools.findOne({
//     name: 'HKUST'
//   }));
// };

Template.courseEquivelencySearch.results = function() {
  // debugger;
  // this.data;
  var homeSchool = Session.get('homeSchool');
  var exchangeSchool = Session.get('exchangeSchool');

  if (!homeSchool || !exchangeSchool) {
    homeSchool = Schools.findOne({
      name: 'UWaterloo'
    });
    exchangeSchool = Schools.findOne({
      name: 'HKUST'
    });
    if (!homeSchool || !exchangeSchool) {
      return [];
    }
    // return [];
  }

  var courseQuery = Session.get('courseQuery');
  
  // var courses = Courses.find().fetch().filter(function(it){
  //   // course belongs to one of the selected schools
  //   // and matches the search query entered
  //   return (homeSchool.courses.indexOf(it._id) > -1 || 
  //           exchangeSchool.courses.indexOf(it._id) > -1) &&
  //          (it.name.toLowerCase().indexOf(courseQuery) > -1 ||
  //           it.description.toLowerCase().indexOf(courseQuery) > -1);

  // }).map(function(it){
  //   return it._id;
  // });

  // return courses;

  // return CourseEquivelents.find({
  //   homeSchool: homeSchool._id,
  //   exchangeSchool: exchangeSchool._id
  // }).fetch().filter(function(it){
  //   // either home school course or exchance school course matches the query
  //   return courses.indexOf(it.homeSchoolCourse) > -1 ||
  //          courses.indexOf(it.exchangeSchoolCourse > -1);
  // }).map(function(it){
  //   it.homeSchool = homeSchool;
  //   it.homeSchoolCourse = Courses.findOne({
  //     _id: it.homeSchoolCourse
  //   });
  //   it.exchangeSchool = exchangeSchool;
  //   it.exchangeSchoolCourse = Courses.findOne({
  //     _id: it.exchangeSchoolCourse
  //   });
  //   return it;
  // });

  var courseEquivelents = CourseEquivelents.find({
    homeSchool: homeSchool._id,
    exchangeSchool: exchangeSchool._id
  }, {
    $sort: {
      pending: -1,
      accepted: 1
    }
  }).fetch().map(function(it){
    it.homeSchool = homeSchool;
    it.homeSchoolCourse = Courses.findOne({
      _id: it.homeSchoolCourse
    });
    it.exchangeSchool = exchangeSchool;
    it.exchangeSchoolCourse = Courses.findOne({
      _id: it.exchangeSchoolCourse
    });
    return it;
  }).filter(function(it){
    // course belongs to one of the selected schools
    // and matches the search query entered
    return (it.homeSchool.courses.indexOf(it.homeSchoolCourse._id) > -1 || 
            it.exchangeSchool.courses.indexOf(it.exchangeSchoolCourse._id) > -1) &&
           (it.homeSchoolCourse.name.toLowerCase().indexOf(courseQuery) > -1 ||
            it.homeSchoolCourse.description.toLowerCase().indexOf(courseQuery) > -1 ||
            it.exchangeSchoolCourse.name.toLowerCase().indexOf(courseQuery) > -1 ||
            it.exchangeSchoolCourse.description.toLowerCase().indexOf(courseQuery) > -1);
  });

  Session.set('hasResults', !!courseEquivelents.length);

  return courseEquivelents;


  // return CourseEquivelents.find({
  //   homeSchool: homeSchool._id,
  //   exchangeSchool: exchangeSchool._id
  // });
};

Session.set('courseQuery', '');
Template.courseEquivelencySearch.events({
  'keyup .input-course-query': function (e) {
    var courseQuery = $('.input-course-query').val().toLowerCase();
    Session.set('courseQuery', courseQuery);
  }
});




Template.courseEquivelencyInput.homeSchool = function() {
  return Session.get('homeSchool');
};

Template.courseEquivelencyInput.exchangeSchool = function() {
  return Session.get('exchangeSchool');
};

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
        school: exchangeSchool,
        name: exchangeSchoolCourseCode,
        description: exchangeSchoolCourseDescription
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
        approved: false
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


});