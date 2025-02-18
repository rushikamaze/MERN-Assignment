const trainContainer = document.getElementById('train-container');
    const train = document.getElementById('train');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    
    let animationFrameId;
    let lastSmokeTime = 0;
    let isAnimating = false;
    
    function createSmoke() {
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      smoke.style.width = Math.random() * 20 + 10 + 'px';
      smoke.style.height = Math.random() * 20 + 10 + 'px';
      smoke.style.backgroundColor = `rgba(255, ${Math.floor(Math.random() * 100) + 100}, 0, 0.7)`;
      smoke.style.borderRadius = '50%';
      
      const trainRect = train.getBoundingClientRect();
      smoke.style.left = trainRect.left + 68 + 'px';
      smoke.style.top = trainRect.top + 5 + 'px';
      
      trainContainer.appendChild(smoke);
      
      setTimeout(() => {
        smoke.style.opacity = '1';
        smoke.style.transform = `translate(${Math.random() * 40 - 20}px, -${Math.random() * 50 + 20}px) scale(${Math.random() + 1})`;
      }, 10);
      
      setTimeout(() => {
        smoke.remove();
      }, 3000);
    }
    
    function animate(timestamp) {
      if (!isAnimating) return;
      
      if (timestamp - lastSmokeTime > 200) {
        createSmoke();
        lastSmokeTime = timestamp;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    startButton.addEventListener('click', () => {
      if (!isAnimating) {
        isAnimating = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    });
    
    stopButton.addEventListener('click', () => {
      isAnimating = false;
      cancelAnimationFrame(animationFrameId);
    });