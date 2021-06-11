// IPhone dots links - only on mobile
const dotsEl = document.querySelectorAll('.feature-section-dots__dot');
[...dotsEl].map((dot) => {
  dot.addEventListener('click', (e) => {
    if (window.innerWidth < 1200) {
      const scrollToId = e.target.dataset.to;
      document.getElementById(scrollToId).scrollIntoView();
    }
  });
});
