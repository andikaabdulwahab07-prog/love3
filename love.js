<script>
  // Enhanced JS for Interactivity and Romance
  document.addEventListener('DOMContentLoaded', function() {
    const block = document.querySelector('.block');
    const particlesContainer = document.getElementById('particles');
    const musicToggle = document.getElementById('music-toggle');
    const volumeControl = document.getElementById('volume-control');
    const volumeSlider = document.getElementById('volume-slider');
    const bgMusic = document.getElementById('bg-music');
    const loveText = document.getElementById('love-text');

    // Generate Floating Hearts Particles
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particlesContainer.appendChild(particle);
      setTimeout(() => particle.remove(), 10000); // Remove after animation
    }
    setInterval(createParticle, 2000); // Add a new heart every 2 seconds

    // Heart Clicking: Add more hearts dynamically
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
        newHeart.style.left = Math.random() * 480 + 'px'; // Random position within love area
        newHeart.style.top = Math.random() * 400 + 'px';
        block.appendChild(newHeart);
      }
    });

    // Music Toggle with Volume Control
    let musicPlaying = false;
    musicToggle.addEventListener('click', function() {
      if (musicPlaying) {
        bgMusic.pause();
        musicToggle.textContent = '♪';
        volumeControl.style.display = 'none';
      } else {
        bgMusic.play().catch(e => console.log('Audio play failed:', e)); // Handle autoplay restrictions
        musicToggle.textContent = '🔊';
        volumeControl.style.display = 'block';
      }
      musicPlaying = !musicPlaying;
    });

    // Volume Control
    volumeSlider.addEventListener('input', function() {
      bgMusic.volume = this.value;
    });

    // Typewriter Effect for Love Text
    const fullText = loveText.textContent;
    loveText.textContent = ''; // Clear initial text
    let index = 0;
    function typeWriter() {
      if (index < fullText.length) {
        loveText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Speed: 50ms per letter (adjust for faster/slower)
      }
    }
    setTimeout(typeWriter, 1000); // Start after fade-in

    // Click to Reveal Extra Message
    loveText.addEventListener
