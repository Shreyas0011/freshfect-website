export function Footer() {
  return `
    <footer>
        <div class="footer-inner">
            <div class="footer-brand">
                <a href="#" class="footer-logo-link" aria-label="Go to home">
                    <img src="/assets/logo.png" alt="Freshfect Logo" class="footer-logo-img">
                </a>
                <p>Driven by nature in <strong>Mumbai, India</strong>. Delivering premium eco-friendly cleaning — Zero Waste, 100% Natural, and safe for your home.</p>
                <div class="social-links">
                    <a href="#" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://wa.me/911234567890" target="_blank" title="WhatsApp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#products">Product</a></li>
                    <li><a href="#how-to-use">How to Use</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Our Catalog</h4>
                <ul>
                    <li><a href="#products">Freshfect All Cleaner</a></li>
                    <li><a href="#products">Pack of 5 (Bundle)</a></li>
                    <li><a href="#how-to-use">Refill Guide</a></li>
                    <li><a href="#contact">Wholesale Inquiries</a></li>
                </ul>
            </div>

            <div class="footer-newsletter">
                <h4>Stay in the Loop</h4>
                <p>Join our green community for exclusive offers and sustainable living tips.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address" aria-label="Email for newsletter">
                    <button type="submit">Subscribe</button>
                </form>
                <div class="footer-trust">
                    <span><i class="fas fa-leaf"></i> 100% Eco-Friendly</span>
                    <span><i class="fas fa-heart"></i> Made with love in India</span>
                    <span><i class="fas fa-shield-alt"></i> Kid & Pet Safe</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2024 Freshfect. All rights reserved. | Registered under <strong>Startup India</strong> & <strong>MSME</strong></p>
            <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms</a>
                <a href="#">Refunds</a>
                <a href="#">Shipping</a>
            </div>
        </div>
    </footer>
  `;
}
