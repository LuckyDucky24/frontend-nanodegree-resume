

var education = [
    {
    "schools":
      {
        "name": "University of California Riverside",
        "location": "Riverside, CA",
        "degree": "Bachelors",
        "major": "History",
        "dates": 2016
      }
},{
    "schools":
      {
        "name": "Udacity",
        "location": "Online",
        "degree": "Front-End Web Development",
        "dates": 2017
      }
},{

    "schools": [
      {
        "name": "Santa Monica College",
        "city": "Santa Monica, CA",
        "course": "Computer Science 3: Intro to Computer Systems",
        "date": ["February 2016", "June 2016"]
      },
      {
        "name": "Santa Monica College",
        "city": "Santa Monica, CA",
        "course": "Computer Science 80: Internet Programming",
        "date": ["February 2016", "June 2016"]
      }
    ]
}]

var bio = {

    "name": "Sean Nam",
    "role": "Junior Developer",
    "number": "(222)333-5555",
    "email": "seannam@email.com",
    "github": "seannam@github.com",
    "pic": "images/fry.jpg",
    "twitter": "seannam@twitter",
    "location": "Los Angeles",
    "skills": ["HTML", "CSS", "JavaScript", "jQuery"]

}

var work = [
    {
    "position": "Sales Representative",
    "employer": "TM Wireless",
    "dates": "July 2016 - March 2017",
    "location": "Los Angeles",
    "description": "Sales Job"
    },
    {
    "position": "Computer Technician",
    "employer": "Westlake Park Square",
    "dates": "May 2015 - February 2016",
    "location": "Los Angeles",
    "description": "Computer Work"
    }
]

var projects = [
    {
    "title": "Shopping Cart",
    "date": "2016",
    "description": "This project was from my CS 80 course. It was a team project where we created a website for a mock t-shirt company. My main contribution was the shopping cart system. I used JavaScript and jQuery to create the ability to update the total quantity and cost of what was input into the shopping cart",
    "image": "images/shoppingcart2.jpg"
    },
    {
    "title": "Trading Card",
    "date": 2017,
    "description": "A CSS project designing a trading card.",
    "image": "images/tradingcard2.jpg"
    }
]



$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));


$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.number));
$("#topContacts").append(HTMLemail.replace("%data%", bio.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.location));

$("#header").append(HTMLbioPic.replace("%data%", bio.pic));


/------ Bio + display ------/

bio.display = function() {
    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);

}
}
bio.display();


/------ Displays Work Section ------/

function displayWork() {

    for(job in work) {

        /------ Work Experience Header ------/

        $("#workExperience").append(HTMLworkStart);

        /------ Employer-Position------/

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
        var formattedPosition = HTMLworkTitle.replace("%data%", work[job].position);
        var formattedEmployerPosition = formattedEmployer + formattedPosition;
        $(".work-entry:last").append(formattedEmployerPosition);

        /------ Work Dates ------/

        var formattedDates = HTMLworkDates.replace("%data%", work[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work[job].description);
        $(".work-entry:last").append(formattedDescription);


    }
}

displayWork();


/------ Click function ------/


$(document).click(function(loc) {

    var x = loc.pageX
    var y = loc.pageY

    logClicks(x, y);

});


/------ Internationalize Button -------/


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

        /--- HTMLheaderName has <h1 id="name"> ---/

        var $name = $('#name');
        var iName = inName($name.text()) || function(){};
        $name.html(iName);
    });
});

/------ Projects with Display ------/


projects.display = function() {
    for (x in projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedProject = HTMLprojectTitle.replace("%data%", projects[x].title);
        $(".project-entry:last").append(formattedProject);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[x].date);
        $(".project-entry:last").append(formattedProjectDates);

        var formattedDates = HTMLprojectDescription.replace("%data%", projects[x].description);
        $(".project-entry:last").append(formattedDates);

        var formattedImage = HTMLprojectImage.replace("%data%", projects[x].image);
        $(".project-entry:last").append(formattedImage);

 }}

projects.display();

/------ Education ------/

education.display = function() {
    for(a in education){
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education[a].schools.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education[a].schools.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry:last").append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education[a].schools.dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education[a].schools.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education[a].schools.major);
        $(".education-entry:last").append(formattedSchoolMajor);
}
}

education.display();



/------ Google Map ------/