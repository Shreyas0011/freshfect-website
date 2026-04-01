export function Footer() {
  return `
    <footer>
        <div class="footer-inner">
            <div class="footer-brand">
                <a href="#" class="footer-logo-link">
                    <img src="/assets/logo.png" alt="Freshfect Logo" class="footer-logo-img">
                </a>
                <p>Driven by nature, our Indian brand delivers eco-friendly cleaning solutions — Zero Waste, 100% Natural, Affordable.</p>
                <div class="social-links" style="margin-top:20px;">
                    <a href="#" title="Instagram" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="Facebook" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                    <a href="https://wa.me/911234567890" target="_blank" title="WhatsApp" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>

            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#how-to-use">How to Use</a></li>
                    <li><a href="#testimonials">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div class="footer-links">
                <h4>Our Catalog</h4>
                <ul>
                    <li><a href="#products">Freshfect All Cleaner</a></li>
                    <li><a href="#products">Value Bundles (Pack of 5)</a></li>
                    <li><a href="#how-to-use">How it Works</a></li>
                    <li><a href="#testimonials">Customer Reviews</a></li>
                </ul>
            </div>

            <div class="footer-newsletter">
                <h4>Stay in the Loop</h4>
                <p>Be the first to know about new products and special offers.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your email address">
                    <button type="submit">Subscribe</button>
                </form>
                <div class="footer-trust" style="margin-top:20px;">
                    <span>🌿 Eco-Friendly</span>
                    <span>🇮🇳 Made in India</span>
                    <span>🐾 Kid & Pet Safe</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2024 Freshfect. All rights reserved. | Registered under <strong>Startup India (DPIIT)</strong> & <strong>MSME Udyam</strong></p>
            <div class="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Refund Policy</a>
                <a href="#">Shipping Policy</a>
            </div>
        </div>
    </footer>
  `;
}
