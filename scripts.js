let doc = document;

// Start display with mock up
const contactLink = doc.getElementById('contactLink');

const contactForm = doc.getElementsByClassName('contactFormDiv')[0];

const mockDiv = doc.getElementsByClassName('mockData')[0];
contactLink.addEventListener("click", function() {
    contactForm.style.display = 'block';

    mockDiv.style.display = 'none';
})
