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
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
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

// Scroll-triggered reveal animations for sections
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('section-reveal');
    });

    const observer = new window.IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded', revealSectionsOnScroll);
