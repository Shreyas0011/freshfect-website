export function Contact() {
  return `
    <section id="contact" class="reveal">
        <div class="section-title">
            <h2>Get in Touch</h2>
            <p>For orders, queries, or bulk enquiries — we're here for you</p>
        </div>
        <div class="contact-container">
            <div class="contact-info">
                <h3>Contact Information</h3>
                <p class="contact-tagline">Reach us directly for the fastest response — especially for orders and bulk pricing!</p>

                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <strong>Location</strong>
                        <p>Bangalore, Karnataka, India</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <strong>Phone / WhatsApp</strong>
                        <a href="tel:+911234567890">+91 12345 67890</a>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <strong>Email</strong>
                        <a href="mailto:hello@freshfect.com">hello@freshfect.com</a>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <strong>Business Hours</strong>
                        <p>Mon – Sat, 9am – 6pm IST</p>
                    </div>
                </div>

                <div class="social-links">
                    <a href="#" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://wa.me/911234567890" target="_blank" title="WhatsApp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>

                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I%20have%20a%20question%20about%20your%20products." target="_blank" class="whatsapp-order-btn">
                    <i class="fab fa-whatsapp"></i> Chat & Order on WhatsApp
                </a>
            </div>

            <form class="contact-form" id="contactForm">
                <h3 style="font-family:'Playfair Display',serif; color:var(--primary-green); margin-bottom:10px;">Send Us a Message</h3>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:20px;">We typically respond within 24 hours.</p>
                <input type="text" id="contactName" placeholder="Your Name" required>
                <input type="email" id="contactEmail" placeholder="Your Email" required>
                <input type="tel" id="contactPhone" placeholder="Your Phone Number (optional)">
                <select id="contactSubject">
                    <option value="" disabled selected>Subject</option>
                    <option value="order">Place an Order</option>
                    <option value="bulk">Bulk / Wholesale Enquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
                <textarea rows="4" id="contactMessage" placeholder="Your Message or Order Details" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
  `;
}
