export function Testimonials() {
  const reviews = [
    {
      name: "Anjali R.",
      product: "Trial Pack Combo",
      rating: 5,
      text: "The best thing you can buy for ₹549! It gives you everything you need and the product is very nice and very useful. Highly recommend to every household!",
      avatar: "A",
      color: "var(--primary-green)"
    },
    {
      name: "Priya S.",
      product: "Dish Wash — 10 Packets",
      rating: 5,
      text: "I am so impressed! It cuts through greasy oil stains and even tough burnt-on residues without endless scrubbing. The fresh lime scent is an absolute bonus — it smells clean and natural, not chemical. Safe to use around my kids and pet.",
      avatar: "P",
      color: "var(--primary-blue)"
    },
    {
      name: "Rahul M.",
      product: "Floor Cleaner",
      rating: 5,
      text: "Good product. Does the job. Smells good and cleans very well. I'm happy with anything sustainable and eco-friendly that fits my budget too. So happy I found Freshfect ❤️",
      avatar: "R",
      color: "var(--accent-green)"
    },
    {
      name: "Meera K.",
      product: "Fabric Wash",
      rating: 5,
      text: "The effort in making it non-toxic and the packaging using paper is highly appreciable. Cleans really well and the fragrance is mild which is good. Looking forward to purchasing more!",
      avatar: "M",
      color: "#8B6F47"
    },
    {
      name: "Suresh D.",
      product: "Dish Wash",
      rating: 5,
      text: "Great product — washes utensils pretty well. Especially it maintains moisture of the hand and doesn't cause dryness. Good value for money!",
      avatar: "S",
      color: "#6B4C8B"
    },
    {
      name: "Kavitha J.",
      product: "Dish Wash",
      rating: 5,
      text: "This dish wash is so good! My dishes have never been so sparkling clean. This 2-litre refill pack is fantastic value and lasts for ages. Superb quality!",
      avatar: "K",
      color: "#B8860B"
    }
  ];

  const cards = reviews.map(r => `
    <div class="testimonial-card">
        <div class="stars">${'★'.repeat(r.rating)}</div>
        <p>"${r.text}"</p>
        <div class="user-info">
            <div class="avatar" style="background:${r.color};display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:1.1rem;">${r.avatar}</div>
            <div class="user-details">
                <strong>${r.name}</strong>
                <span>Verified Buyer — ${r.product}</span>
            </div>
        </div>
    </div>
  `).join('');

  return `
    <section id="testimonials" class="reveal">
        <div class="section-title">
            <h2>Let Customers Speak for Us</h2>
            <p>Real reviews from real Freshfect users across India</p>
        </div>
        <div class="testimonial-grid">
            ${cards}
        </div>
    </section>
  `;
}
