import { projects } from './module.js';
import { experiences } from './experience.js'

// ---------------------------------
// PAGE ELEMENTS
// ---------------------------------
let doc = document;

// ---------------------------------
// CONTENT SECTIONS:
// ---------------------------------
// About Me Section (default):
const aboutDiv = doc.getElementsByClassName('aboutMe')[0];
// About Me link:
// const aboutMeLink = doc.getElementsByClassName('aboutMeLink')[0];
const aboutMeLinks = doc.querySelectorAll('.aboutMeLink')
// Contact Form section:
const contactFormDiv = doc.getElementsByClassName('contactFormDiv')[0];
// Contact Form link:
const contactLinks = doc.querySelectorAll('.contactLink');
// Projects Section:
const projectsDiv = doc.getElementsByClassName('projects')[0];
// Projects Link:
const projectsLinks = doc.querySelectorAll('.projectsLink');
// Experience Link:
const experienceLinks = doc.querySelectorAll('.experienceLink');
// Experience Section:
const experienceDiv = doc.getElementsByClassName('experienceDiv')[0];

// ---------------------------------
// SIDEBAR NAV LINKS FUNCTIONALITY
// ---------------------------------

// About Me links:
aboutMeLinks.forEach(el => {
    el.addEventListener("click", function() {
    // Updates animation classes
    aboutDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    experienceDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");

    // Updates Display
    contactFormDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    experienceDiv.style.display = 'none';    
    aboutDiv.style.display = 'block';

    // Greeting Typewriter Effect
    let i=0;
    let greeting = `Hello, World!`;
    let greetingSection = doc.getElementById('greeting');

    greetingSection.innerHTML = "";

    function typeWriter() {
        if (i < greeting.length) {
        greetingSection = doc.getElementById('greeting');
        greetingSection.innerHTML += greeting[i];
        i++;
        setTimeout(typeWriter, 150);
        }
    }
    typeWriter();
    })
})

// Contact Form links:
contactLinks.forEach(el => el.addEventListener("click", function () {
    // Updates animation classes  
    contactFormDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    experienceDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");


    // Updates Display
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    experienceDiv.style.display = 'none';
    contactFormDiv.style.display = 'block';
}));

// Projects links:
projectsLinks.forEach(el => el.addEventListener("click", function () {
    // Updates animation classes
    projectsDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    experienceDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");

    // Updates Display
    contactFormDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    experienceDiv.style.display = 'none';
    projectsDiv.style.display = 'block';
}));

// Experience links:
experienceLinks.forEach(el => el.addEventListener("click", function () {
    // Updates animation classes
    experienceDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");


    // Updates Display
    contactFormDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    experienceDiv.style.display = 'block';
}));

// ---------------------------------
// CONTACT FORM SUBMISSION
// ---------------------------------

// const submitBtn = doc.getElementById('submitBtn');

// submitBtn.addEventListener("click", () => {
//     const submissionName = document.querySelector('input[name="name"]').value;

//     const submissionEmail = document.querySelector('input[name="email"]').value;

//     const submissionMsg = document.querySelector('textarea[name="message"]').value;
//     console.log('name: ', submissionName);
//     console.log('email: ', submissionEmail);
//     console.log('message: ', submissionMsg);

//     document.getElementsByClassName("contactForm")[0].reset();

// });

// ---------------------------------
// PROJECTS SECTION:
// ---------------------------------
// Get Cards Section
let cards = doc.getElementsByClassName('projectsCards')[0];

projects.forEach( (elem, index) => {
    let card = doc.createElement('article');
    cards.appendChild(card);
    card.classList.add('card', `project-${index}`);
    let header = doc.createElement('header');
    let h3 = doc.createElement('h3');
    h3.innerHTML = elem.Name;
    header.appendChild(h3);
    card.appendChild(header);
    let innerCardDiv = doc.createElement('div');
    card.appendChild(innerCardDiv);
    let desc = doc.createElement('div');
    innerCardDiv.appendChild(desc);
    innerCardDiv.classList.add('innerCardDiv');
    desc.classList.add('projDesc');
    let p = doc.createElement('p');
    desc.appendChild(p);
    p.innerHTML = `<p><strong>Description:</strong> ${elem.Description} <span><strong> <a href="${elem['Link']}">Link</a></strong></span></p>`;
    p.innerHTML += `<p><strong>Built With</strong>: ${elem['Build']}</p>`;
    p.innerHTML += `<p><strong>Category</strong>: ${elem['Project Type']}</p>`;
    let cardFooter = doc.createElement('div');
    cardFooter.setAttribute('class', 'cardFooter');
    innerCardDiv.appendChild(cardFooter);
    let anchor = doc.createElement('a');
    cardFooter.appendChild(anchor);
    anchor.href = elem.Link;
    anchor.target = '_blank';
    let img = doc.createElement('img');
    anchor.appendChild(img);
    img.src = elem.Image;
    img.alt = elem.Name;
});

// ---------------------------------
// EXPERIENCE SECTION:
// ---------------------------------
// Get Exp Section:
let experienceSection = doc.getElementsByClassName('experienceSection')[0]

experiences.forEach((e) => {
    let div = doc.createElement('div');
    
    // Give each exp div a title
    let h3 = doc.createElement('h3');
    h3.innerHTML = `${e["Role"]} @ <strong><a href="${e["Company Link"]}">${e["Company"]}</a></strong>`;
    div.appendChild(h3);
    let dateRange = doc.createElement('h5');
    dateRange.classList.add('dateRange');
    dateRange.innerHTML = `${e["Date Range"]}`;
    div.appendChild(dateRange);
    let experience = doc.createElement('p');
    experience.classList.add('experience');
    div.appendChild(experience);
    let expList = doc.createElement('ul');
    div.appendChild(expList);
    e["Experience"].map(el => {
        let li = doc.createElement('li');
        li.innerHTML = `
            <span class="arrows">&#9656;</span> ${el}
        `
        expList.appendChild(li);
    });

    experienceSection.appendChild(div);
    
})
// ---------------------------------
// ONLOAD SECTION:
// ---------------------------------
// Default to About Me Section
document.addEventListener("DOMContentLoaded", document.querySelector(".aboutMeLink").click());
