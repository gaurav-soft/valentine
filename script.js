const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const askCard = document.getElementById('ask-card');
const successCard = document.getElementById('success-card');

// Function to move the "No" button randomly
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Set fixed position to allow it to move anywhere on the screen
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show success card on clicking "Yes"
yesBtn.addEventListener('click', () => {
    askCard.classList.add('hidden');
    successCard.classList.remove('hidden');
    
    // Optional: Add confetti effect here if you want to get fancy!
    triggerConfetti();
});

function triggerConfetti() {
    // You could use a library like canvas-confetti here
    console.log("Confetti time!");
}
