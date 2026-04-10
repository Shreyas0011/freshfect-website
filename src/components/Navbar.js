export function Navbar() {
  return `
    <nav class="navbar">
        <a href="#" class="logo">
            <img src="/assets/logo.png" alt="Freshfect Logo" class="logo-img">
        </a>
        <div class="nav-container">
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#how-to-use">How to Use</a></li>
                <li><a href="#contact">Contact</a></li>
                <li class="mobile-only"><a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'm%20interested%20in%20shopping%20your%20products!" target="_blank" class="cta-btn mobile-cta">Shop Now</a></li>
            </ul>
        </div>
        <div class="nav-actions">
            <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'm%20interested%20in%20shopping%20your%20products!" target="_blank" class="cta-btn desktop-only">Shop Now</a>
            <button class="mobile-toggle" aria-label="Toggle Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

  `;
}
