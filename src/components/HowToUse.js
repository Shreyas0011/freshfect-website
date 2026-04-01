export function HowToUse() {
  const steps = [
    { num: '01', icon: '🫙', title: 'Wide Mouth Bottle',   desc: 'Take any wide-mouth bottle with at least 500ml capacity.' },
    { num: '02', icon: '💧', title: 'Add Water First',      desc: 'Pour exactly 500 ml of clean water into the bottle.' },
    { num: '03', icon: '🌿', title: 'Add the Sachet',       desc: 'Open and pour in 1 Freshfect refill sachet (18g).' },
    { num: '04', icon: '🥄', title: 'Stir Well',            desc: 'Mix with a spoon or stick for at least 4–5 minutes.' },
    { num: '05', icon: '⏳', title: 'Let It Rest',           desc: 'Set aside for 10–12 hours to activate the formula.' },
    { num: '06', icon: '✅', title: 'Ready to Use!',        desc: 'Your 500ml Freshfect cleaner is fully prepared.' },
    { num: '07', icon: '🧴', title: 'Fill Spray Bottle',    desc: 'Transfer into any spray bottle for easy application.' },
    { num: '08', icon: '✨', title: 'Spray & Clean',        desc: 'Spray on any surface — tabletop, floor, sink & more.' },
  ];

  const cards = steps.map((s, i) => `
    <div class="htu-card" style="--delay:${i * 0.07}s;">
      <div class="htu-card-num">${s.num}</div>
      <div class="htu-card-icon">${s.icon}</div>
      <h4 class="htu-card-title">${s.title}</h4>
      <p class="htu-card-desc">${s.desc}</p>
    </div>
  `).join('');

  return `
    <section id="how-to-use" class="reveal htu-section">
      <div class="section-title">
        <h2>How to Use</h2>
        <p>From sachet to spray — ready in 8 simple steps</p>
      </div>

      <div class="htu-grid">
        ${cards}
      </div>

      <div class="htu-trust-bar">
        <span>🛡️ Kid &amp; Pet Safe</span>
        <span>🌿 100% Plant-Based</span>
        <span>♻️ Zero Waste</span>
        <span>🇮🇳 Made in India</span>
      </div>
    </section>
  `;
}

// No interactive init needed anymore
export function initHowToUse() {}
