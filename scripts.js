// ---------------------------------
// PAGE ELEMENTS
// ---------------------------------
let doc = document;

// ---------------------------------
// CONTENT SECTIONS:
// ---------------------------------
// About Me Section (default)
const aboutDiv = doc.getElementsByClassName('aboutMe')[0];
// About Me link:
const aboutMeLink = doc.getElementById('aboutMeLink');
// Contact Form section:
const contactFormDiv = doc.getElementsByClassName('contactFormDiv')[0];
// Contact Form link
const contactLink = doc.getElementById('contactLink');

// ---------------------------------
// SIDEBAR NAV LINKS FUNCTIONALITY
// ---------------------------------

// About Me link:
aboutMeLink.addEventListener("click", function() {
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.style.display = 'none';
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


// Contact Form link:
contactLink.addEventListener("click", function() {
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.style.display = 'none';
    contactFormDiv.style.display = 'block';
})

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



window.onload=function() {
    document.querySelector("#aboutMeLink").click();
}