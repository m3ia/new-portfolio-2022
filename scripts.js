import { projects } from '/module.js';

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
const contactLink = doc.getElementById('contactLink');
// Projects Section:
const projectsDiv = doc.getElementsByClassName('projects')[0];
// Projects Link:
const projectsLink = doc.querySelectorAll('.projectsLink');

// ---------------------------------
// SIDEBAR NAV LINKS FUNCTIONALITY
// ---------------------------------

// About Me link:
aboutMeLinks.forEach(el => {
    el.addEventListener("click", function() {
    // Updates animation classes
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");

    // Updates Display
    contactFormDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
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

// Contact Form link:
contactLink.addEventListener("click", function() {
    // Updates animation classes    
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");

    // Updates Display
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'none';
    contactFormDiv.style.display = 'block';
})

// Projects link:
projectsLink.forEach(el => el.addEventListener("click", function () {
    // Updates animation classes
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    projectsDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");

    // Updates Display
    contactFormDiv.style.display = 'none';
    aboutDiv.style.display = 'none';
    projectsDiv.style.display = 'block';
}));


// ---------------------------------
// CONTACT FORM SUBMISSION
// ---------------------------------

const submitBtn = doc.getElementById('submitBtn');

submitBtn.addEventListener("click", () => {
    const submissionName = document.querySelector('input[name="name"]').value;

    const submissionEmail = document.querySelector('input[name="email"]').value;

    const submissionMsg = document.querySelector('textarea[name="message"]').value;
    console.log('name: ', submissionName);
    console.log('email: ', submissionEmail);
    console.log('message: ', submissionMsg);

    document.getElementsByClassName("contactForm")[0].reset();

});

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
    p.innerHTML = `<strong>Description:</strong> ${elem.Description}`;
    p.innerHTML += `<span><strong> <a href="${elem['Link']}">Link</a></strong></span>`;
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
// ONLOAD SECTION:
// ---------------------------------
// Default to About Me Section
window.onload=function() {
    document.querySelector(".aboutMeLink").click();
}