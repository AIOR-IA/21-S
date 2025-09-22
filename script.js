
const container = document.getElementById('flowerContainer');
 document.getElementById('background-music').volume = 0.5;

function createFlower() {
    const flowerWrapper = document.createElement('div');
    flowerWrapper.classList.add('flower-wrapper');

    const flower = document.createElement('div');
    flower.classList.add('flower');

    flowerWrapper.appendChild(flower);
    flowerWrapper.style.left = Math.random() * 95 + 'vw';
    flowerWrapper.style.animationDuration = (Math.random() * 8 + 7) + 's';
    flower.style.animationDuration = (Math.random() * 2 + 3) + 's';

    const size = Math.random() * 30 + 10;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';
    flower.style.filter = `blur(${Math.random() * 2}px)`;
    flower.style.opacity = Math.random() * 0.5 + 0.5;

    container.appendChild(flowerWrapper);

    setTimeout(() => {
        flowerWrapper.remove();
    }, parseFloat(flowerWrapper.style.animationDuration) * 1000 + 500);
}

setInterval(createFlower, 250);

const messageElement = document.querySelector('.message-text');

const poemLines = [
    "Feliz Día de la Amistad 💛",
    "Hoy recordé en como llegaste tú… como un rayito de luz",
    "Y en cómo ciertas personas, sin serlo todo",
    "pueden significar tanto.",
    "Y tú… eres una de ellas.",
    "Como esas flores amarillas,",
    "como el amarillo del sol que ilumina la esquina…",
    "Lo sentía tan cercano,",
    "lo sentía desde niña 🌻",
    "Gracias por existir ✨, mi personita especial.",
    "alias la chaparra xd",
    "Abrashooo psicológico a la distancia ✨."
];

let currentLineIndex = 0;

const displayTime = 3000;
const fadeTime = 1500;

function showNextLine() {

    messageElement.classList.remove('fade-in');
    messageElement.classList.add('fade-out');

    setTimeout(() => {

        currentLineIndex = (currentLineIndex + 1) % poemLines.length;

        messageElement.textContent = poemLines[currentLineIndex];

        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
    }, fadeTime);
}

setTimeout(() => {
    messageElement.textContent = poemLines[currentLineIndex];
    messageElement.classList.add('fade-in');
}, 1000);

setInterval(showNextLine, displayTime + fadeTime);
                            

function enableAudioOnce() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.6;
    audio.play().catch((e) => console.log('playback failed:', e));
}

// Activar música en la primera interacción (táctil o clic)
window.addEventListener('click', enableAudioOnce, { once: true });
window.addEventListener('touchstart', enableAudioOnce, { once: true });