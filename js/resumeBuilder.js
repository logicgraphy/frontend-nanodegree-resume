/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio, work, projects, education;

function loadBioSection(){
	$.getJSON("./data/bio.json", function(data) {
		bio = data;
	    $("#header").prepend(HTMLheaderRole.replace('%data%', data.role));
	    $("#header").prepend(HTMLheaderName.replace('%data%', data.name));	
		
		var formattedContactGeneric = HTMLcontactGeneric;
		formattedContactGeneric = formattedContactGeneric.replace('%contact%', "Generic Contact");
		formattedContactGeneric = formattedContactGeneric.replace('%data%', "To be updated");
		//$("#topContacts").append(formattedContactGeneric);	
		$("#topContacts").append(HTMLlocation.replace('%data%',data.contacts.location));
		$("#topContacts").append(HTMLmobile.replace('%data%',data.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace('%data%',data.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace('%data%',data.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace('%data%',data.contacts.github));	
		//$("#topContacts").append(HTMLblog.replace('%data%',data.contacts.blog));

	    $("#header").append(HTMLbioPic.replace('%data%',data.biopic));
		$("#header").append(HTMLwelcomeMsg.replace('%data%',data.welcomeMessage));
		$("#header").append(HTMLskillsStart);
		data.skills.forEach(function(d){
			$("#header").append(HTMLskills.replace('%data%',d));
		});
		
		if($('.flex-item').length === 0) {
	      $('#topContacts').hide();
	    }
	    if($('h1').length === 0) {
	      $('#header').hide();
	    }

	});
}

function loadWorkSection(){
	$.getJSON("./data/work.json", function(data){
		work = data;	
		data = data.jobs;		
		$('#workExperience').append(HTMLworkStart);			

		for(var i in data){	
			$('.work-entry').append(HTMLworkEmployer.replace('%data%',data[i].employer) + HTMLworkTitle.replace('%data%',data[i].title));
			$('.work-entry').append(HTMLworkDates.replace('%data%',data[i].dates));
			$('.work-entry').append(HTMLworkLocation.replace('%data%',data[i].location));
			$('.work-entry').append(HTMLworkDescription.replace('%data%',data[i].description));
		}		

		if($('.work-entry').length === 0) {
	      	$('#workExperience').hide();
	    }
	});
}

function loadProjectsSection(){
	$.getJSON("./data/projects.json", function(data){
		projects = data;
		data = data.projects;
		$('#projects').append(HTMLprojectStart);
		
		for(var i in data){		
			$('.project-entry').append(HTMLprojectTitle.replace('%data%', data[i].title));
			$('.project-entry').append(HTMLprojectDates.replace('%data%', data[i].dates));
			$('.project-entry').append(HTMLprojectDescription.replace('%data%', data[i].description));
			data[i].images.forEach(function(d){
				$('.project-entry').append(HTMLprojectImage.replace('%data%', d));
			});
			
		}
		if($('.project-entry').length === 0) {
	      	$('#projects').hide();
	    }	
	});
}

function loadEducationSection(){
	$.getJSON("./data/education.json", function(data){
		education = data;
		var schools  = data.schools;
		var onlineCourses = data.onlineCourses;
		
		$('#education').append(HTMLschoolStart);
		for(var i in schools){
			$('.education-entry').append(HTMLschoolName.replace('#', schools[i].url).replace('%data%', schools[i].name) + HTMLschoolDegree.replace('%data%', schools[i].degree));		
			$('.education-entry').append(HTMLschoolDates.replace('%data%', schools[i].dates));
			$('.education-entry').append(HTMLschoolLocation.replace('%data%', schools[i].location));
			schools[i].majors.forEach(function(d){
				$('.education-entry').append(HTMLschoolMajor.replace('%data%', d));
			});
			
		}
		$('.education-entry').append(HTMLonlineClasses);	
		for(var j in onlineCourses){
			
			$('.education-entry').append(HTMLonlineTitle.replace('%data%', onlineCourses[j].title) + HTMLonlineSchool.replace('%data%',onlineCourses[j].school));
			$('.education-entry').append(HTMLonlineDates.replace('%data%',onlineCourses[j].date));
			$('.education-entry').append(HTMLonlineURL.replace('%data%',onlineCourses[j].url));
		}

		if($('.education-entry').length === 0) {
	      	$('#education').hide();
	    }
	});
}

function loadMapSection(){
	$('#mapDiv').append(googleMap);
	if($('#map') === null) {
	    $('#mapDiv').hide();
	}	
}

function loadLetsConnectionSection(){
	$.getJSON("./data/bio.json", function(data) {
		$("#footerContacts").append(HTMLmobile.replace('%data%',data.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace('%data%',data.contacts.email));		
		$("#footerContacts").append(HTMLtwitter.replace('%data%',data.contacts.twitter));
		
		if($('.flex-item').length === 0) {
			$('#lets-connect').hide();
		}
	});
}    

//Call methods to load data 
loadBioSection();
loadWorkSection();
loadEducationSection();
loadProjectsSection();
loadMapSection();
loadLetsConnectionSection();
    






	
    
    
    
    











