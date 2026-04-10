export function Products() {
  return `
    <section id="products" class="reveal">
        <div class="section-title">
            <h2>Our Signature Product</h2>
            <p>One powerful eco-friendly formula for your entire home</p>
        </div>

        <div class="product-featured-card reveal">
            <div class="product-featured-image">
                <img src="/assets/product_floor.png" alt="Freshfect All Cleaner">
            </div>
            <div class="product-featured-text">
                <div class="product-category-badge">Universal Cleaner</div>
                
                <h3 class="product-title">Freshfect All Cleaner</h3>
                
                <p class="product-subtitle">Fresh Scent • 1 Sachet = 500ml</p>
                
                <div class="product-price">₹299.00</div>
                
                <p class="product-description">
                    Simplify your cleaning routine. Our powerful powder-to-liquid formula cuts through grease, dirt, and grime organically. Safe for floors, glass, kitchen counters, and bathroom surfaces without any toxic chemicals.
                </p>

                <div class="product-features-list">
                    <div class="product-feature-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <strong>Multi-Surface Power</strong>
                            <p>One cleaner for every room and surface</p>
                        </div>
                    </div>
                    <div class="product-feature-item">
                        <i class="fas fa-leaf"></i>
                        <div>
                            <strong>100% Plant-Based</strong>
                            <p>Zero toxic residues left behind</p>
                        </div>
                    </div>
                </div>

                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Freshfect%20All%20Cleaner." target="_blank" class="cta-btn-primary whatsapp-btn">
                    <i class="fab fa-whatsapp"></i> Order on WhatsApp
                </a>
            </div>
        </div>

        <div class="section-title reveal bundle-title">
            <h2>Premium Bundle</h2>
            <p>The smartest and most sustainable way to clean your home.</p>
        </div>
        
        <div class="product-grid reveal">
            <div class="product-card">
                <div class="product-badge">Best Value</div>
                <img src="/assets/product_pack5_same.png" alt="Pack of 5 Same Fragrance">
                <h3>Pack of 5 (Same Fragrance)</h3>
                <p class="product-variant">5 Sachets x 500ml</p>
                <div class="price">₹1,299.00 <span class="original-price">₹1,495.00</span></div>
                <p class="card-desc">Stock up on high-performance cleaning. Five identical sachets of our signature All Cleaner formula — delivered right to your door in Mumbai.</p>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Pack%20of%205%20Bundle." target="_blank" class="cta-btn-primary">
                        <i class="fab fa-whatsapp"></i> Buy Bundle
                    </a>
                </div>
            </div>
        </div>
    </section>
  `;
}
