
// bootstrap the app with some data
Meteor.startup(function() {

  // check for existing data
  if (Schools.find().count() === 0) {

  	// schools
  	var u = Schools.insert({
  		name: 'UWaterloo',
			courses: []
  	});
		var h = Schools.insert({
			name: 'HKUST',
			courses: []
		});

		// courses
		var u1 = Courses.insert({
			school: u,
      name: 'MATH239',
      description: 'MATH239 desc'
		});
  	var u2 = Courses.insert({
			school: u,
      name: 'CO250',
      description: 'CO250 desc'
		});
		var h1 = Courses.insert({
			school: h,
      name: 'MATH2390',
      description: 'MATH2390 desc'
		});
  	var h2 = Courses.insert({
			school: h,
      name: 'CO2500',
      description: 'CO2500 desc'
		});

		Schools.update({_id: u}, {
      $push: { courses: u1 }
    });
    Schools.update({_id: u}, {
      $push: { courses: u2 }
    });
    Schools.update({_id: h}, {
      $push: { courses: h1 }
    });
    Schools.update({_id: h}, {
      $push: { courses: h2 }
    });

		// course equivelents
		CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: u1,
      exchangeSchool: h,
      exchangeSchoolCourse: h1,
      pending: false,
      approved: true
    });
    CourseEquivelents.insert({
      homeSchool: u,
      homeSchoolCourse: u1,
      exchangeSchool: h,
      exchangeSchoolCourse: h2,
      pending: false,
      approved: false
    });

  }

});