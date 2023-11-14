var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = "Your Name &copy; " + thisYear;
footer.appendChild(copyright);
var skills = [
    "JavaScript",
    "HTML",
    "CSS",
];
var skillsSection = document.querySelector('#skills');
var skillsList = skillsSection.querySelector('ul');
for (var i=0, i<skills.length i++) {
    var currentSkill = skills[i];
} 