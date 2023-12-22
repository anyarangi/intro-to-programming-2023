const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
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
const messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userName = event.target.usersName.value;
    const userEmail = event.target.usersEmail.value;
    const userMessage = event.target.usersMessage.value;
    console.log('User Name:', userName);
    console.log('User Email:', userEmail);
    console.log('User Message:', userMessage);
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    messageForm.reset();
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${userEmail}">${userName}</a>
        <span>${userMessage}</span>
    `;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function () {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});