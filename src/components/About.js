export function About() {
  return `
    <section id="about" class="reveal">
        <div class="section-title">
            <h2>About Freshfect</h2>
            <p>Driven by nature, built for your home.</p>
        </div>
        <div class="about-container">
            <div class="about-image">
                <img src="/assets/product_pack5_multi.png" alt="Freshfect Products">
            </div>
            <div class="about-text">
                <h3>Why Freshfect?</h3>
                <p>Urban households rely on chemical-based cleaners packed with harsh toxins — we set out to change that. Freshfect is a 100% plant-based, non-toxic cleaning refill brand built to make safe, effective, and affordable eco-friendly cleaning accessible to every Indian home.</p>
                <br>
                <p>Our powder-to-liquid sachets dissolve in water to create 500ml of powerful cleaner — eliminating single-use plastic bottles and reducing your household's carbon footprint, one refill at a time.</p>

                <div class="about-badges">
                    <span class="badge"><i class="fas fa-leaf"></i> Ammonia Free</span>
                    <span class="badge"><i class="fas fa-leaf"></i> Bleach Free</span>
                    <span class="badge"><i class="fas fa-leaf"></i> Plastic Free</span>
                    <span class="badge"><i class="fas fa-shield-alt"></i> Kid & Pet Safe</span>
                    <span class="badge"><i class="fas fa-home"></i> 100% Home</span>
                    <span class="badge"><i class="fas fa-seedling"></i> Plant-Based</span>
                </div>

                <div class="impact-row">
                    <div class="impact-item">
                        <i class="fas fa-heartbeat"></i>
                        <div>
                            <strong>SDG 3: Good Health</strong>
                            <p>Reduces toxic chemical exposure in your home</p>
                        </div>
                    </div>
                    <div class="impact-item">
                        <i class="fas fa-recycle"></i>
                        <div>
                            <strong>SDG 12: Responsible Consumption</strong>
                            <p>Promotes eco-friendly, zero-waste consumption</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}
