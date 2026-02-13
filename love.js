document.addEventListener('DOMContentLoaded', function() {
  const particlesContainer = document.getElementById('particles');
  const musicToggle = document.getElementById('music-toggle');
  const bgMusic = document.getElementById('bg-music');
  const loveText = document.getElementById('love-text');

  // Floating Hearts Particles
  function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random()*100+'vw';
    particle.style.animationDelay = Math.random()*10+'s';
    particlesContainer.appendChild(particle);
    setTimeout(()=>particle.remove(),12000);
  }
  setInterval(createParticle,800);

  // Music toggle
  let isPlaying = false;
  musicToggle.addEventListener("click", ()=>{
    if(!isPlaying){ bgMusic.play(); musicToggle.textContent="⏸"; isPlaying=true;}
    else{ bgMusic.pause(); musicToggle.textContent="♪"; isPlaying=false;}
  });

  // Typewriter effect
  const fullText = "my dearest love, you know that i love you more than words can ever express. every moment without you feels incomplete, and my heart aches with the depth of my feelings for you. you're the light in my life, the one who makes everything brighter and more beautiful. i cherish your kindness, your maturity, and the way you always understand me, even when i'm being a bit childish. i'm sorry if i annoy you sometimes i just can't help but show my affection. but most of all, i miss you terribly and dream of the day we can finally be together. please, i want to meet as soon as possible i can't wait to hold you close and create more memories. i love you endlessly. HAPPY VALENTINE'S DAY SAYAANGG💘";
  let index = 0;
  function typeWriter(){
    if(index<fullText.length){
      loveText.textContent+=fullText.charAt(index);
      index++;
      setTimeout(typeWriter,50);
    }
  }
  setTimeout(typeWriter,500);
});
