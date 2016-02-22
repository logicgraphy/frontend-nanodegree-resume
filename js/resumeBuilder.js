/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio, work, projects, education;

$.getJSON("./data/bio.json", function(data) {
	bio = data;
	bio.display = function(){	
	    $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
	    $("#header").prepend(HTMLheaderName.replace('%data%', bio.name));	
		
		var formattedContactGeneric = HTMLcontactGeneric;
		formattedContactGeneric = formattedContactGeneric.replace('%contact%', "Generic Contact");
		formattedContactGeneric = formattedContactGeneric.replace('%data%', "To be updated");
		//$("#topContacts").append(formattedContactGeneric);	
		$("#topContacts").append(HTMLlocation.replace('%data%',bio.contacts.location));
		$("#topContacts").append(HTMLmobile.replace('%data%',bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace('%data%',bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace('%data%',bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace('%data%',bio.contacts.github));	
		//$("#topContacts").append(HTMLblog.replace('%data%',bio.contacts.blog));

	    $("#header").append(HTMLbioPic.replace('%data%',bio.biopic));
		$("#header").append(HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(d){
			$("#header").append(HTMLskills.replace('%data%',d));
		});

		$("#footerContacts").append(HTMLmobile.replace('%data%',bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace('%data%',bio.contacts.email));		
		$("#footerContacts").append(HTMLtwitter.replace('%data%',bio.contacts.twitter));		
	 }

	bio.display();
	if($('.flex-item').length === 0) {
      $('#topContacts').hide();
    }
    if($('h1').length === 0) {
      $('#header').hide();
	}
	if($('.flex-item').length === 0) {
			$('#lets-connect').hide();
	}
});

$.getJSON("./data/work.json", function(data){
	work = data;	
	work.display = function(){			
		$('#workExperience').append(HTMLworkStart);			   
		work.jobs.forEach(function(d){
			$('.work-entry').append(HTMLworkEmployer.replace('%data%',d.employer) + HTMLworkTitle.replace('%data%',d.title));
			$('.work-entry').append(HTMLworkDates.replace('%data%',d.dates));
			$('.work-entry').append(HTMLworkLocation.replace('%data%',d.location));
			$('.work-entry').append(HTMLworkDescription.replace('%data%',d.description));
		});		
	}
	work.display();
	if($('.work-entry').length === 0) {
      	$('#workExperience').hide();
    }	
});

$.getJSON("./data/projects.json", function(data){
	projects = data;
	projects.display = function(){					
		$('#projects').append(HTMLprojectStart);		
		projects.projects.forEach(function(d){
			$('.project-entry').append(HTMLprojectTitle.replace('%data%', d.title));
			$('.project-entry').append(HTMLprojectDates.replace('%data%', d.dates));
			$('.project-entry').append(HTMLprojectDescription.replace('%data%', d.description));
			d.images.forEach(function(i){
				$('.project-entry').append(HTMLprojectImage.replace('%data%', i));
			});
		});
	}
	projects.display();
	if($('.project-entry').length === 0) {
      	$('#projects').hide();
    }		
});


$.getJSON("./data/education.json", function(data){
	education = data;
	education.display = function(){
		var schools  = education.schools;
		var onlineCourses = education.onlineCourses;
		
		$('#education').append(HTMLschoolStart);
		schools.forEach(function(d){
			$('.education-entry').append(HTMLschoolName.replace('#', d.url).replace('%data%', d.name) + HTMLschoolDegree.replace('%data%', d.degree));		
			$('.education-entry').append(HTMLschoolDates.replace('%data%', d.dates));
			$('.education-entry').append(HTMLschoolLocation.replace('%data%', d.location));
			d.majors.forEach(function(m){
				$('.education-entry').append(HTMLschoolMajor.replace('%data%', m));
			});
		});
		$('.education-entry').append(HTMLonlineClasses);	
		onlineCourses.forEach(function(d){
			$('.education-entry').append(HTMLonlineTitle.replace('%data%', d.title) + HTMLonlineSchool.replace('%data%',d.school));
			$('.education-entry').append(HTMLonlineDates.replace('%data%',d.date));
			$('.education-entry').append(HTMLonlineURL.replace('%data%',d.url));
		});
	}
	education.display();
	if($('.education-entry').length === 0) {
      	$('#education').hide();
    }	
});

function loadMapSection(){
	$('#mapDiv').append(googleMap);
	if($('#map') === null) {
	    $('#mapDiv').hide();
	}	
}  

loadMapSection();