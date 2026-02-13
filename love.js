document.addEventListener('DOMContentLoaded', function() {
  const block = document.querySelector('.block');
  const particlesContainer = document.getElementById('particles');
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  const loveText = document.getElementById('love-text');

  // Floating Hearts Particles
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 10000);
  }
  setInterval(createParticle, 2000);

  // Heart Clicking: Add more hearts with better placement
  block.addEventListener('click', function(e) {
    if (e.target.tagName === 'DIV') {
      const newHeart = document.createElement('div');
      newHeart.style.width = '40px';
      newHeart.style.height = '40px';
      newHeart.style.position = 'absolute';
      newHeart.style.background = 'url("heart.png") no-repeat';
      newHeart.style.backgroundSize = 'contain';
      newHeart.style.animation = 'pulse 2s infinite';
      newHeart.style.cursor = 'pointer';
      // Better random placement within bounds
      const maxX = 480 - 40;
      const maxY = 400 - 40;
      newHeart.style.left = Math.random() * maxX + 'px';
      newHeart.style.top = Math.random() * maxY + 'px';
      block.appendChild(newHeart);
    }
  });

  // Music Toggle
  let musicPlaying = false;
  musicToggle.addEventListener('click', function() {
    if (musicPlaying) {
      bgMusic.pause();
      musicToggle.textContent = '♪';
    } else {
      bgMusic.play().catch(e => console.log('Audio play failed:', e));
      musicToggle.textContent = '🔊';
    }
    musicPlaying = !musicPlaying;
  });

  // Typewriter Effect for Love Text
  const fullText = loveText.textContent;
  loveText.textContent = '';
  let index = 0;
  function typeWriter() {
    if (index < fullText.length) {
      loveText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  setTimeout(typeWriter, 1000);

  // Click to Reveal Extra Message
  loveText.addEventListener('click', function() {
    if (!loveText.classList.contains('expanded')) {
      loveText.innerHTML += '<br><br><em>And every beat of my heart whispers your name...</em>';
      loveText.classList.add('expanded');
      loveText.style.animation = 'none';
    }
  });

  // Accessibility
  musicToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      musicToggle.click();
    }
  });
});
