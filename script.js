// ==========================================================================
// Strip. — Photobooth Studio
// Interactivity: cursor spotlight, gallery filter, mobile nav, scroll reveal
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Cursor spotlight (hero) ---------- */
  const spotlight = document.getElementById('spotlight');
  const hero = document.querySelector('.hero');

  if (spotlight && hero) {
    hero.addEventListener('mouseenter', () => spotlight.classList.add('active'));
    hero.addEventListener('mouseleave', () => spotlight.classList.remove('active'));
    hero.addEventListener('mousemove', (e) => {
      const xPercent = (e.clientX / window.innerWidth) * 100;
      const yPercent = (e.clientY / window.innerHeight) * 100;
      spotlight.style.setProperty('--x', xPercent + '%');
      spotlight.style.setProperty('--y', yPercent + '%');
    });
  }

  /* ---------- Gallery filter ---------- */
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.gallery-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    // Close mobile menu after clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => io.observe(el));

  /* ---------- Booking form ---------- */
  // NOTE: this only shows a local confirmation message — it does not send
  // the data anywhere yet. Hook this up to a form service (e.g. Formspree,
  // Getform) or your own backend endpoint before you rely on it for real
  // bookings. See the comment in index.html above the <form> tag.
  const form = document.getElementById('bookingForm');
  const status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = "Thanks — this demo form doesn't send yet. Connect it to Formspree or your backend to go live.";
    });
  }

});
