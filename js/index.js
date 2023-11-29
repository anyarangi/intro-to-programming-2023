let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "Annah Nyarangi &copy; " + thisYear;
footer.appendChild(copyright);
const skills = [
    "JavaScript",
    "HTML",
    "CSS",
];
const skillsSection = document.querySelector('#skills');
const skillsList = skillsSection.querySelector('ul');
let (var i = 0; i < skills.length; i++) {
    const skill =document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill); 
} 