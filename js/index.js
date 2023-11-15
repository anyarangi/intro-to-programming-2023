var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = "Annah Nyarangi &copy; " + thisYear;
footer.appendChild(copyright);
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
];
const skillsSection = document.querySelector('#skills');
console.log(skillsSection);
const skillsList = skillsSection.querySelector('ul');
for (var i = 0; i < skills.length; i++) {
    const skill =document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill); 
} 