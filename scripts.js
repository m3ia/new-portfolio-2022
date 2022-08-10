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
const contactForm = doc.getElementsByClassName('contactFormDiv')[0];
// Contact Form link
const contactLink = doc.getElementById('contactLink');

// ------------------------------------------------------------------------------------
// SIDEBAR NAV LINKS FUNCTIONALITY
// ------------------------------------------------------------------------------------

// About Me link:
aboutMeLink.addEventListener("click", function() {
    contactForm.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.classList.add("w3-animate-opacity", "w3-animate-bottom");
    contactForm.style.display = 'none';
    aboutDiv.style.display = 'block';
})


// Contact Form link:
contactLink.addEventListener("click", function() {
    aboutDiv.classList.remove("w3-animate-opacity", "w3-animate-bottom");
    contactForm.classList.add("w3-animate-opacity", "w3-animate-bottom");
    aboutDiv.style.display = 'none';
    contactForm.style.display = 'block';
})
