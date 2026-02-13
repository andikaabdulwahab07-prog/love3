document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles');
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');

  // Floating Hearts Particles
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 12000);
  }
  setInterval(createParticle, 800);

  // Music toggle
  let isPlaying = false;
  musicToggle.addEventListener("click", () => {
    if (!isPlaying) {
      bgMusic.play();
      musicToggle.textContent = "⏸";
      isPlaying = true;
    } else {
      bgMusic.pause();
      musicToggle.textContent = "♪";
      isPlaying = false;
    }
  });
});
