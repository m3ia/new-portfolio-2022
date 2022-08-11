// ------------------------------------------------------------------------------------
// PAGE ELEMENTS
// ------------------------------------------------------------------------------------
let doc = document;

// ------------------------------------------------------------------------------------
// CONTENT SECTIONS:
// ------------------------------------------------------------------------------------
// About Me Section (default)
const aboutDiv = doc.getElementsByClassName('aboutMe')[0];
// About Me link:
const aboutMeLink = doc.getElementById('aboutMeLink');
// Contact Form section:
const contactFormDiv = doc.getElementsByClassName('contactFormDiv')[0];
// Contact Form link
const contactLink = doc.getElementById('contactLink');

// ------------------------------------------------------------------------------------
// SIDEBAR NAV LINKS FUNCTIONALITY
// ------------------------------------------------------------------------------------

// About Me link:
aboutMeLink.addEventListener("click", function() {
    contactFormDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.style.display = 'none';
    aboutDiv.style.display = 'block';
})


// Contact Form link:
contactLink.addEventListener("click", function() {
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactFormDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.style.display = 'none';
    contactFormDiv.style.display = 'block';
})

// ------------------------------------------------------------------------------------
// CONTACT FORM SUBMISSION
// ------------------------------------------------------------------------------------
const submissionName = doc.getElementById('inputName');
const submissionEmail = doc.getElementById('inputEmail');
const submissionMsg = doc.getElementById('inputMessage');

submissionName.addEventListener("input", e => {
    const name = e.target.value;
    return name;
})

submissionEmail.addEventListener("input", e => {
    const email = e.target.value;
    return email;
})

submissionMsg.addEventListener("input", e => {
    const msg = e.target.value;
    return msg;
})

const contactForm = doc.querySelector('form.contactForm');

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log('name: ', submissionName.value);
    console.log('email: ', submissionEmail.value);
    console.log('message: ', submissionMsg.value);

    const subName = doc.getElementById('inputName');
    const subEmail = doc.getElementById('inputEmail');
    const subMsg = doc.getElementById('inputMessage');
    subName.value = "";
    subEmail.value = "";
    subMsg.value = "";
})
