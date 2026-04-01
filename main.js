import { Navbar } from './src/components/Navbar.js';
import { Hero } from './src/components/Hero.js';
import { About } from './src/components/About.js';
import { Products } from './src/components/Products.js';
import { HowToUse, initHowToUse } from './src/components/HowToUse.js';

import { Testimonials } from './src/components/Testimonials.js';
import { Contact } from './src/components/Contact.js';

import { Footer } from './src/components/Footer.js';

const app = document.querySelector('#app');

// Assemble Page
app.innerHTML = `
  ${Navbar()}
  <main>
    ${Hero()}
    ${About()}
    ${Products()}
    ${HowToUse()}
    ${Testimonials()}
    ${Contact()}

  </main>
  ${Footer()}
`;


// Initialize Interactions
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const reveals = document.querySelectorAll('.reveal');

    // 0. Init How To Use interactive viewer
    initHowToUse();


    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Reveals
    const revealOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Contact Form Submission (Mockup)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = contactForm.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Sending...';
            button.disabled = true;

            setTimeout(() => {
                alert('Thank you for reaching out! We will get back to you soon.');
                contactForm.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1500);
        });
    }
});
