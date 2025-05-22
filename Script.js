const timeline = document.getElementById('timeline');
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observerLinha = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        timeline.classList.add('animada');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.4
  });

  observerLinha.observe(timeline);

  const observerItens = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach(item => {
    observerItens.observe(item);
  });