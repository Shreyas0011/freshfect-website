export function Reviews() {
  const reviews = [
    {
      name: 'Priya S.',
      location: 'Bandra',
      text: 'Finally found a cleaner that doesn\'t smell like strong chemicals! Freshfect makes my kitchen smell like a spa, and it actually works.',
      rating: 5
    },
    {
      name: 'Rahul M.',
      location: 'Pune',
      text: 'As a pet parent, safety is my priority. Knowing this is 100% plant-based gives me peace of mind. Plus, the space-saving sachets are brilliant!',
      rating: 5
    },
    {
      name: 'Simran K.',
      location: 'Delhi',
      text: 'Moving to a zero-waste lifestyle was hard until I found Freshfect. One tiny sachet makes a whole bottle. No more plastic waste!',
      rating: 5
    },
    {
      name: 'Arjun V.',
      location: 'Mumbai',
      text: 'Struggled with floor stains for weeks, but the All Cleaner took care of it in one go. Highly recommend the bundle pack.',
      rating: 5
    },
    {
      name: 'Neha R.',
      location: 'Bangalore',
      text: 'The wide-mouth bottle concept is so practical. I just reuse my old containers and order the sachets. Environmentally friendly and cost-effective!',
      rating: 5
    },
    {
      name: 'Vikram G.',
      location: 'Hyderabad',
      text: 'Freshfect has replaced all my cleaning sprays. It works on everything from my glass dining table to the kitchen tile. Truly a universal solution.',
      rating: 5
    }
  ];

  const stars = '<i class="fas fa-star"></i>'.repeat(5);

  const reviewCards = reviews.map((r, i) => `
    <div class="review-card reveal" style="--delay: ${i * 0.1}s">
        <div class="review-rating">${stars}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
            <div class="author-info">
                <strong>${r.name}</strong>
                <span>${r.location}</span>
            </div>
            <div class="review-icon">
                <i class="fas fa-leaf"></i>
            </div>
        </div>
    </div>
  `).join('');

  return `
    <section id="reviews" class="reviews-section">
        <div class="section-title reveal">
            <h2>What Our Customers Say</h2>
            <p>Real stories from homes moving towards a cleaner, greener future.</p>
        </div>
        <div class="reviews-grid">
            ${reviewCards}
        </div>
    </section>
  `;
}
