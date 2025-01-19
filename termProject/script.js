function navigateToGame() {
  window.location.href = "game.html";
}

// Bubble functionality
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bubble-container");
  const maxBubbles = 10; //Maximum number of bubbles allowed
  let currentBubbles = 0; 

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }

  function createBubble() {
    if (currentBubbles >= maxBubbles) {
      return; // Do not create more bubbles if max is reached
    }

    const bubble = document.createElement("div");
    bubble.className = "bubble";
    const size = Math.random() * 50 + 20; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.top = `${Math.random() * 100}%`;
    bubble.style.backgroundColor = getRandomColor();
    container.appendChild(bubble);
    currentBubbles++; 

    // Remove the bubble after animation ends
    bubble.addEventListener("animationend", () => {
      bubble.remove();
      currentBubbles--;
    });

    // Pop effect on click
    bubble.addEventListener("click", () => {
      bubble.style.transform = "scale(0)";
      setTimeout(() => {
        bubble.remove();
        currentBubbles--; 
      }, 200);
    });
  }

 
  setInterval(createBubble, 1000); // :) time for each bubble to be created
});
