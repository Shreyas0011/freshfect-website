export function Products() {
  return `
    <section id="products" class="reveal">
        <div class="section-title">
            <h2>Our Products</h2>
            <p>Powder-to-liquid refills — 18g sachet makes 500ml of powerful cleaner</p>
        </div>

        <!-- Individual Variants -->
        <div class="products-tab-label">Individual Sachets</div>
        <div class="product-grid">
            <div class="product-card">
                <div class="product-badge">Best Seller</div>
                <img src="/assets/product_floor.png" alt="Freshfect Floor Cleaner">
                <h3>Floor Cleaner</h3>
                <p class="product-variant">Pine Fresh • 1 Sachet = 500ml</p>
                <span class="price">₹109.00</span>
                <p>Powerful plant-based floor cleaner. Safe on all floor types. Leaves a fresh pine scent.</p>
                <div class="product-tags">
                    <span>Multi-Surface</span><span>Non-Toxic</span>
                </div>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20Floor%20Cleaner%20sachets." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
            <div class="product-card">
                <div class="product-badge teal">Popular</div>
                <img src="/assets/product_dish.png" alt="Freshfect Dish Wash">
                <h3>Dish Wash</h3>
                <p class="product-variant">Lemon Fresh • 1 Sachet = 500ml</p>
                <span class="price">₹109.00</span>
                <p>Gentle on hands, tough on grease. Plant-based formula cuts through oil and burn-on residue.</p>
                <div class="product-tags">
                    <span>Gentle on Hands</span><span>Lemon Fresh</span>
                </div>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20Dish%20Wash%20sachets." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
            <div class="product-card">
                <img src="/assets/product_fabric.png" alt="Freshfect Fabric Wash">
                <h3>Fabric Wash</h3>
                <p class="product-variant">Jasmine Fresh • 1 Sachet = 500ml</p>
                <span class="price">₹109.00</span>
                <p>Safe for machine and hand wash. Removes stains while keeping fabrics soft and fresh.</p>
                <div class="product-tags">
                    <span>Machine Safe</span><span>Jasmine Fresh</span>
                </div>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20Fabric%20Wash%20sachets." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        </div>

        <!-- Value Packs -->
        <div class="section-title reveal" style="margin-top: 100px;">
            <h2>Value Packs</h2>
            <p>More sachets, more savings. Perfect for regular households.</p>
        </div>
        <div class="product-grid reveal">
            <div class="product-card">
                <img src="/assets/product_pack5_same.png" alt="Pack of 5 Same Fragrance">
                <h3>Pack of 5 — Same Fragrance</h3>
                <p class="product-variant">5 Sachets = 2.5 Litres</p>
                <span class="price">₹549.00</span>
                <p>5 sachets of your chosen variant — Floor Cleaner, Dish Wash, or Fabric Wash. Ideal for loyal users.</p>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20Pack%20of%205%20(Same%20Fragrance)." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
            <div class="product-card featured-border">
                <div class="product-badge">Most Loved</div>
                <img src="/assets/product_pack5_multi.png" alt="Multi-Fragrance Pack">
                <h3>Multi-Fragrance Pack</h3>
                <p class="product-variant">5 Sachets = 2.5 Litres Mix</p>
                <span class="price">₹599.00</span>
                <p>Mix of Floor Cleaner, Dish Wash, Fabric Wash & more. Best way to try the full Freshfect range.</p>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Multi-Fragrance%20Pack." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
            <div class="product-card">
                <img src="/assets/product_combo.png" alt="Healthy Home Combo">
                <h3>Healthy Home Combo</h3>
                <p class="product-variant">8 Products • 500ml each</p>
                <span class="price">₹899.00</span>
                <p>Complete cleaning kit for every corner of your home — Floor, Dish, Fabric, Hand Wash & more.</p>
                <div class="product-footer">
                    <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I'd%20like%20to%20order%20the%20Healthy%20Home%20Combo." target="_blank" class="order-btn">
                        <i class="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                </div>
            </div>
        </div>

        <!-- Subscription Plans -->
        <div class="section-title reveal" style="margin-top: 100px;">
            <h2>Subscription Plans</h2>
            <p>Never run out of freshness. Auto-delivered to your door. Cancel anytime.</p>
        </div>
        <div class="sub-grid reveal">
            <div class="sub-card">
                <div class="sub-icon">📦</div>
                <h3>Quarterly Plan</h3>
                <span class="price">₹1,499 <small>/ 3 months</small></span>
                <ul class="sub-features">
                    <li><i class="fas fa-check"></i> 15 Refill Sachets</li>
                    <li><i class="fas fa-check"></i> Free Delivery</li>
                    <li><i class="fas fa-check"></i> Save 10%</li>
                    <li><i class="fas fa-check"></i> Priority Support</li>
                </ul>
                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I%20want%20to%20subscribe%20to%20the%20Quarterly%20Plan." target="_blank" class="order-btn">Subscribe Now</a>
            </div>
            <div class="sub-card featured">
                <div class="sub-icon">⭐</div>
                <div class="sub-popular-tag">Most Popular</div>
                <h3>Half-Yearly Plan</h3>
                <span class="price">₹2,699 <small>/ 6 months</small></span>
                <ul class="sub-features">
                    <li><i class="fas fa-check"></i> 32 Refill Sachets</li>
                    <li><i class="fas fa-check"></i> Free Glass Dispenser</li>
                    <li><i class="fas fa-check"></i> Free Delivery</li>
                    <li><i class="fas fa-check"></i> Priority Support</li>
                </ul>
                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I%20want%20to%20subscribe%20to%20the%20Half-Yearly%20Plan." target="_blank" class="order-btn">Subscribe Now</a>
            </div>
            <div class="sub-card">
                <div class="sub-icon">🌿</div>
                <h3>Annual Plan</h3>
                <span class="price">₹4,999 <small>/ year</small></span>
                <ul class="sub-features">
                    <li><i class="fas fa-check"></i> 70 Refill Sachets</li>
                    <li><i class="fas fa-check"></i> 2 Free Glass Dispensers</li>
                    <li><i class="fas fa-check"></i> Free Delivery</li>
                    <li><i class="fas fa-check"></i> Save 25%</li>
                </ul>
                <a href="https://wa.me/911234567890?text=Hi%20Freshfect!%20I%20want%20to%20subscribe%20to%20the%20Annual%20Plan." target="_blank" class="order-btn">Best Value</a>
            </div>
        </div>
    </section>
  `;
}
