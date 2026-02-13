document.addEventListener("DOMContentLoaded", function () {

  const block = document.querySelector(".block");
  const particlesContainer = document.getElementById("particles");
  const toggle = document.getElementById("music-toggle");
  const music = document.getElementById("bg-music");
  const loveText = document.getElementById("love-text");

  let isPlaying = false;

  toggle.addEventListener("click", () => {
    if (!isPlaying) {
      music.play();
      toggle.textContent = "⏸";
      isPlaying = true;
    } else {
      music.pause();
      toggle.textContent = "♪";
      isPlaying = false;
    }
  });
startMusic();

  // Toggle button for manual control
  musicToggle.addEventListener('click', function() {
    if (musicPlaying) {
      bgMusic.pause();
      musicPlaying = false;
      musicToggle.textContent = '♪';
    } else {
      startMusic();
    }
  });
// Rotating Photos Sequentially
const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']; // Add more if needed, e.g., 'photo4.jpg'
const rotatingPhoto = document.getElementById('rotating-photo');
let currentPhotoIndex = 0;

function rotatePhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length; // Moves to next in sequence
  rotatingPhoto.src = photos[currentPhotoIndex];
}

setInterval(rotatePhoto, 4000); // Changes every 4 seconds
  
  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "vw";
    particlesContainer.appendChild(particle);
    setTimeout(() => particle.remove(), 10000);
  }

  setInterval(createParticle, 2000);

  const fullText = loveText.textContent;
  loveText.textContent = "";
  let index = 0;

  function typeWriter() {
    if (index < fullText.length) {
      loveText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }

  setTimeout(typeWriter, 800);

});


