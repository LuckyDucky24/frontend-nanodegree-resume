var bio = {

    "name": "Sean Nam",
    "role": "Junior Developer",
    "contacts": {
        "mobile": "(222)333-5555",
        "email": "seannam@email.com",
        "github": "seannam@github.com",
        "location": "Los Angeles"
    },
    "welcomeMessage": "Welcome to my Online Resume",
    "skills": ["HTML", "CSS", "Bootstrap", "Grunt", "npm", "JavaScript", "jQuery", "GitHub", "Microsoft Office"],
    "biopic": "images/profile.jpg"
};

var education = {

    "schools": [{
        "name": "University of California Riverside",
        "location": "Riverside, CA",
        "degree": "Bachelors",
        "majors": ["History"],
        "dates": "2016",
        "url": "http://www.ucr.edu/"
    }],
    "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree Program",
            "school": "Udacity",
            "dates": "April 2017 - August 2017",
            "url": "www.udacity.com"
        },
        {
            "title": "Computer Science 3: Intro to Computer Systems",
            "school": "Santa Monica College",
            "dates": "February 2016",
            "url": "http://smc.edu/"
        },
        {
            "title": "Computer Science 80: Internet Programming",
            "school": "Santa Monica College",
            "dates": "June 2016",
            "url": "http://smc.edu/"
        }
    ]
};

var work = {

    "jobs": [{
            "employer": "TM Wireless",
            "title": "Sales Representative",
            "location": "Los Angeles",
            "dates": "July 2016 - March 2017",
            "description": "Sales Job"
        },
        {
            "employer": "Westlake Park Square",
            "title": "Computer Technician",
            "location": "Los Angeles",
            "dates": "May 2015 - February 2016",
            "description": "Computer Technician"
        }
    ]
};

var projects = {

    "projects": [{
            "title": "Shopping Cart",
            "dates": "2016",
            "description": "This project was from my CS 80 course. It was a team project where we created a website for a mock t-shirt company. My main contribution was the shopping cart system. I used JavaScript and jQuery to create the ability to update the total quantity and cost of what was input into the shopping cart",
            "images": ["images/cart1.jpg"]
        },
        {
            "title": "Trading Card",
            "dates": "2017",
            "description": "A CSS project designing a trading card.",
            "images": ["images/tradingcard2.jpg"]
        }
    ]
};

bio.display = function() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts, #footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill;

        for (var skill = 0; skill < bio.skills.length; skill++) {
            formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

education.display = function() {

    for (var a = 0; a < education.schools.length; a++) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[a].name);
        var formattedSchoolNameURL = formattedSchoolName.replace("#", education.schools[a].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[a].degree);
        var formattedSchoolNameDegreeURL = formattedSchoolNameURL + formattedSchoolDegree;
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[a].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[a].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[a].majors);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolNameDegreeURL);
        $("a:last").attr("target", "_blank");
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);

    for (var b = 0; b < education.onlineCourses.length; b++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[b].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[b].school);
        var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[b].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[b].url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedOnlineTitleSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};
education.display();

work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    for (var job = 0; job < work.jobs.length; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerPosition = formattedEmployer + formattedPosition;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedEmployerPosition);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
};
work.display();

$("#main").append(internationalizeButton);

function inName(x) {
    var first = "";
    var last = "";
    var fullName = "";
    first = x[0].toUpperCase() + x.slice(1, x.indexOf(" ")).toLowerCase();
    last = x.slice(x.indexOf(" ")).toUpperCase();
    fullName = first + " " + last;
    return fullName;
}


$(document).ready(function() {
    $('button').click(function() {
        var $name = $('#name');
        var iName = inName($name.text()) || function() {};
        $name.html(iName);
    });
});

projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (var x = 0; x < projects.projects.length; x++) {
        var formattedProject = HTMLprojectTitle.replace("%data%", projects.projects[x].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[x].dates);
        var formattedDates = HTMLprojectDescription.replace("%data%", projects.projects[x].description);

        $(".project-entry:last").append(formattedProject);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedDates);

        for(var img = 0; img < projects.projects[x].images.length; img++) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[x].images[img]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);