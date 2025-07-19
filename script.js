// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#fff';
    }
});

// Interactive project cards (to be added later)
function showProject(projectId) {
    console.log(`Showing project: ${projectId}`);
}

// Contact form handling (to be implemented)
function handleContactForm(event) {
    event.preventDefault();
    console.log('Contact form submitted');
}
