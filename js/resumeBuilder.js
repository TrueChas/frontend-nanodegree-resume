var bio = {
	"name" : "Chas Middleton ",
	"role" : "Web Developer ",
	"contacts" : {
		"mobile" : "940-312-2767",
		"email" : "chas334@gmail.com",
		"github" : "TrueChas",
		"location" : "Flower Mound, TX"
	},
	"welcome" : "Hello to all my future employers ",
	"skills" : [
		"awesomeness", "programming", "HTML", "Javascript"
	],
	"biopic" : "images/pokemon.jpg",
	"display" : {

	}
};
var work = {
	"jobs": [
		{
			"employer" : "AMC Dine-In Theaters",
			"title" : "Busser",
			"dates" : "Forgotten",
			"description" : "My job was to deliver the food and drinks to customers, clean the theaters before and after every movie, and ensure the best experience I can for each customer."
		},
		{
			"employer" : "Pizza Hut",
			"title" : "Delivery Driver",
			"dates" : "Forgotten",
			"description" : "My job was to answer the phone, deliver the pizza to the customer, and wash the dishes afterward."
		},
		{
			"employer" : "Dunkin Donuts",
			"title" : "Baker",
			"dates" : "2016-current",
			"description" : "My job is to make the donuts that will be sold throughout the day."
		}
	]
};
var projects = {
	"projects" : [
		{
			// I'll finish this section when I finish the nanodegree.
		}
	]
};
var education = {
	"schools": [
		{
			"name": "University of Texas at Dallas",
			"location": "Richardson, TX",
			"url": "www.utdallas.edu"
		},
		{
			"name": "North Central Texas College",
			"location": "Flower Mound, TX and Corrinth, TX",
			"url": "www.nctc.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}
function displayWork() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
}
displayWork();
// projects.display = function() {
// 	if(projects.projects.length > 0) {
// 		for(i in projects.projects) {
// 			$("#projects").append(HTMLprojectStart);
// 			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
// 			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
// 			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
// 			$(".project-entry:last").append(formattedProjectTitle);
// 			$(".project-entry:last").append(formattedProjectDates);
// 			$(".project-entry:last").append(formattedProjectDescription);
// 			for(img in projects.projects[i].images) {
// 				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
// 				$(".project-entry:last").append(formattedProjectImage);
// 			}
// 		}
// 	}
// }
// projects.display();
education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry:last").append(formattedSchoolName);
			$(".education-entry:last").append(formattedSchoolLocation);
		}
		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);
				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
	}
}
education.display();
$("#mapDiv").append(googleMap);
