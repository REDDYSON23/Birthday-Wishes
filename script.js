function createHeart() {
    const container = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; 
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    container.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}

// Generate a new heart every 400ms
setInterval(createHeart, 400);
