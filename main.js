import { Navbar } from './src/components/Navbar.js';
import { Hero } from './src/components/Hero.js';
import { About } from './src/components/About.js';
import { Products } from './src/components/Products.js';
import { HowToUse, initHowToUse } from './src/components/HowToUse.js';

import { Contact } from './src/components/Contact.js';

import { Footer } from './src/components/Footer.js';

const app = document.querySelector('#app');

// Assemble Page
app.innerHTML = `
  <div class="global-bg-elements">
    <div class="ornament orn-1"><i class="fas fa-leaf"></i></div>
    <div class="ornament orn-2">✦</div>
    <div class="ornament orn-3"><i class="fas fa-seedling"></i></div>
    <div class="ornament orn-4">✦</div>
    <div class="ornament orn-5"><i class="fas fa-leaf"></i></div>
    <div class="ornament orn-6"><i class="fas fa-spa"></i></div>
    <div class="ornament orn-7">✦</div>
    <div class="ornament orn-8"><i class="fas fa-wind"></i></div>
  </div>
  ${Navbar()}
  <main>
    ${Hero()}
    ${About()}
    ${Products()}
    ${HowToUse()}
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


    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navLinksList = document.querySelectorAll('.nav-links a');

    if (mobileToggle && navContainer) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navContainer.classList.toggle('active');
            document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
        });

        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navContainer.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

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
