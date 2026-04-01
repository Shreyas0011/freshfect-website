export function Testimonials() {
  const reviews = [
    {
      name: "Anjali R.",
      product: "Starter Kit",
      rating: 5,
      text: "The best thing you can buy! It gives you everything you need to clean the whole house and the product is very nice. Highly recommend to every household!",
      avatar: "A",
      color: "var(--primary-green)"
    },
    {
      name: "Priya S.",
      product: "Mega Pack (10 Sachets)",
      rating: 5,
      text: "I am so impressed! It cuts through tough grime on counters and floors without endless scrubbing. The fresh scent is an absolute bonus — it smells clean and natural. Safe to use around my kids and pet.",
      avatar: "P",
      color: "var(--primary-blue)"
    },
    {
      name: "Rahul M.",
      product: "Everyday Pack (5 Sachets)",
      rating: 5,
      text: "Good product. Does the job on all surfaces. Smells good and cleans very well. I'm happy with anything sustainable and eco-friendly that fits my budget too. So happy I found Freshfect ❤️",
      avatar: "R",
      color: "var(--accent-green)"
    },
    {
      name: "Meera K.",
      product: "Trial Pack",
      rating: 5,
      text: "The effort in making it non-toxic and the packaging using paper is highly appreciable. Cleans glass and tiles really well and the fragrance is mild which is good. Looking forward to purchasing more!",
      avatar: "M",
      color: "#8B6F47"
    },
    {
      name: "Suresh D.",
      product: "Monthly Refill",
      rating: 5,
      text: "Great universal cleaner — washes away sticky messes fast. Especially it maintains moisture of the hands if you spray it and doesn't cause dryness. Good value for money!",
      avatar: "S",
      color: "#6B4C8B"
    },
    {
      name: "Kavitha J.",
      product: "Everyday Pack",
      rating: 5,
      text: "This cleaner is so versatile! My kitchen and floors have never been so sparkling clean. The refill pack is fantastic value and lasts for ages. Superb quality!",
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
