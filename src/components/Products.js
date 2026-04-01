export function Products() {
  return `
    <section id="products" class="reveal">
        <div class="section-title">
            <h2>Our Signature Product</h2>
            <p>One powerful eco-friendly formula for your entire home</p>
        </div>

        <div class="about-container" style="background: white; padding: 60px; border-radius: 40px; box-shadow: var(--shadow-premium); border: 1px solid var(--glass-border); margin-top: 40px;">
            <div class="about-image">
                <img src="/assets/product_floor.png" alt="Freshfect All Cleaner">
            </div>
            <div class="about-text">
                <div class="product-badge" style="display: inline-flex; align-items: center; justify-content: center; background: rgba(107, 203, 119, 0.1); color: var(--primary-green); border: 1px solid rgba(107, 203, 119, 0.3); padding: 6px 14px; border-radius: 100px; font-size: 0.85rem; font-weight: 600; margin-bottom: 20px;">Universal Cleaner</div>
                
                <h3 style="font-size: 3rem; color: var(--primary-green); font-family: 'Playfair Display', serif; line-height: 1.1; margin-bottom: 10px;">Freshfect All Cleaner</h3>
                
                <p class="product-variant" style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 10px; letter-spacing: 0.05em;">Fresh Scent • 1 Sachet = 500ml</p>
                
                <div class="price" style="font-size: 2.2rem; margin: 20px 0; color: var(--accent-green); font-family: 'Outfit', sans-serif; font-weight: 700;">₹109.00</div>
                
                <p style="font-size: 1.1rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 30px;">
                    Simplify your cleaning routine. Our powerful powder-to-liquid formula cuts through grease, dirt, and grime organically. Safe for floors, glass, kitchen counters, and bathroom surfaces without any toxic chemicals.
                </p>

                <div class="impact-row" style="margin-top: 0; margin-bottom: 40px; display: flex; flex-direction: column; gap: 18px;">
                    <div class="impact-item" style="display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fas fa-check-circle" style="font-size: 1.3rem; color: var(--accent-green); margin-top: 3px; flex-shrink: 0;"></i>
                        <div>
                            <strong style="display: block; font-size: 0.9rem; color: var(--primary-green); margin-bottom: 3px;">Multi-Surface Power</strong>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">One cleaner for every room and surface</p>
                        </div>
                    </div>
                    <div class="impact-item" style="display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fas fa-leaf" style="font-size: 1.3rem; color: var(--accent-green); margin-top: 3px; flex-shrink: 0;"></i>
                        <div>
                            <strong style="display: block; font-size: 0.9rem; color: var(--primary-green); margin-bottom: 3px;">100% Plant-Based</strong>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Zero toxic residues left behind</p>
                        </div>
                    </div>
                </div>

                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Freshfect%20All%20Cleaner." target="_blank" class="cta-btn-primary" style="display: inline-flex; align-items: center; gap: 10px; font-size: 1.1rem; background: var(--primary-green); color: white; padding: 18px 45px; border-radius: 100px; text-decoration: none; font-weight: 600; font-family: 'Outfit', sans-serif; transition: all 0.3s ease;">
                    <i class="fab fa-whatsapp" style="font-size: 1.3rem;"></i> Order on WhatsApp
                </a>
            </div>
        </div>

        <div class="section-title reveal" style="margin-top: 100px;">
            <h2>Value Bundles</h2>
            <p>Perfect for stocking up and saving money.</p>
        </div>
        
        <div class="product-grid reveal" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px;">
            <div class="product-card" style="flex: 1; min-width: 300px; max-width: 500px;">
                <img src="/assets/product_pack5_same.png" alt="Pack of 5 Same Fragrance" style="border-radius: 20px;">
                <h3>Pack of 5 (Same Fragrance)</h3>
                <p class="product-variant">5 Sachets x 500ml</p>
                <div class="price" style="font-size: 1.8rem; color: var(--accent-green); font-weight: 700;">₹499.00 <span style="font-size: 1rem; color: #999; text-decoration: line-through;">₹545.00</span></div>
                <p style="margin-top: 10px;">Stock up on your favorite scent. 5 identical sachets of our powerful All Cleaner formula.</p>
                <div class="product-footer" style="margin-top: 25px;">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Pack%20of%205%20(Same%20Fragrance)." target="_blank" class="order-btn" style="width: 100%; border-radius: 100px;">
                        <i class="fab fa-whatsapp"></i> Buy Bundle
                    </a>
                </div>
            </div>

            <div class="product-card featured-border" style="flex: 1; min-width: 300px; max-width: 500px;">
                <div class="product-badge" style="background: var(--accent-green); color: white;">Most Popular</div>
                <img src="/assets/product_pack5_multi.png" alt="Multi-Fragrance Pack" style="border-radius: 20px;">
                <h3>Multi-Fragrance Pack</h3>
                <p class="product-variant">5 Sachets x 500ml</p>
                <div class="price" style="font-size: 1.8rem; color: var(--accent-green); font-weight: 700;">₹499.00 <span style="font-size: 1rem; color: #999; text-decoration: line-through;">₹545.00</span></div>
                <p style="margin-top: 10px;">Try them all! A curated mix of all our beloved fragrances in one single package.</p>
                <div class="product-footer" style="margin-top: 25px;">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Multi-Fragrance%20Pack." target="_blank" class="cta-btn-primary" style="display: block; text-align: center; border-radius: 100px;">
                        <i class="fab fa-whatsapp"></i> Buy Bundle
                    </a>
                </div>
            </div>
        </div>
    </section>
  `;
}
