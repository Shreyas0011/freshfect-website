export function Navbar() {
  return `
    <nav class="navbar">
        <a href="#" class="logo">
            <img src="/assets/logo.png" alt="Freshfect Logo" class="logo-img">
        </a>
        <ul class="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#how-to-use">How to Use</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'm%20interested%20in%20shopping%20your%20products!" target="_blank" class="cta-btn">Shop Now</a>
    </nav>

  `;
}
