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

// Advanced scroll-triggered animations for sections
function revealSectionsOnScroll() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('section-reveal');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stagger child animations
                const children = Array.from(entry.target.children);
                children.forEach((child, idx) => {
                    child.style.transitionDelay = `${0.1 + idx * 0.15}s`;
                });
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

// Dynamic navigation underline for active menu item
function dynamicNavUnderline() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = Array.from(document.querySelectorAll('section'));
    const underline = document.createElement('div');
    underline.className = 'nav-underline';
    document.querySelector('.nav-links').appendChild(underline);

    function updateUnderline() {
        let activeIdx = 0;
        let minDist = Infinity;
        const scrollY = window.scrollY + window.innerHeight / 4;
        sections.forEach((section, idx) => {
            const rect = section.getBoundingClientRect();
            const dist = Math.abs(rect.top + window.scrollY - scrollY);
            if (dist < minDist) {
                minDist = dist;
                activeIdx = idx;
            }
        });
        const activeLink = navLinks[activeIdx];
        if (activeLink) {
            const linkRect = activeLink.getBoundingClientRect();
            const navRect = activeLink.parentElement.parentElement.getBoundingClientRect();
            underline.style.width = `${linkRect.width}px`;
            underline.style.left = `${linkRect.left - navRect.left}px`;
            underline.style.top = `${linkRect.bottom - navRect.top + 2}px`;
        }
    }

    function animateUnderline() {
        updateUnderline();
        requestAnimationFrame(animateUnderline);
    }

    underline.style.position = 'absolute';
    underline.style.height = '3px';
    underline.style.background = 'linear-gradient(90deg, #38b2ac 0%, #6ee7b7 100%)';
    underline.style.borderRadius = '2px';
    underline.style.transition = 'width 0.3s cubic-bezier(.77,0,.175,1), left 0.3s cubic-bezier(.77,0,.175,1), top 0.3s cubic-bezier(.77,0,.175,1)';
    underline.style.pointerEvents = 'none';
    underline.style.zIndex = '10';

    animateUnderline();

    window.addEventListener('resize', updateUnderline);
}

document.addEventListener('DOMContentLoaded', dynamicNavUnderline);
