const challengeInput = document.getElementById("challenge");
const userInput = document.getElementById("user-input");
const timerElement = document.getElementById("timer");
const messageElement = document.getElementById("message");
const levelElement = document.getElementById("level");
const restartBtn = document.getElementById("restart-btn");
const submitBtn = document.getElementById("submit-btn");



const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
    const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten"];
    const colors = ["red", "blue", "green", "yellow", "purple",
"orange", "black", "white"];

let level = 1;
let challengeText = "";
let timeLeft = 45;
let timerInterval;

function startGame() 
{
    level = 1;
    timeLeft = 45;
    levelElement.textContent = level;
    restartBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    userInput.value = "";
    messageElement.textContent = "";
    setChallengeText();
    startTimer();

}

function setChallengeText()
{
    if (level === 1) 
    {
    challengeText = getRandomElement (months);
    } 
    else if (level === 2) 
    {
    challengeText = getRandomElement (months) + getRandomElement(numbers);
    }
    else if (level === 3)
    {
    challengeText = getRandomElement (months) + getRandomElement(numbers) + getRandomElement(colors);
    }
    challengeInput.value = challengeText;
}

function getRandomElement(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

function startTimer() 
{

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame (false); 
    }
    
    }, 1000);
    
}

function endGame (won) {

    clearInterval(timerInterval);
    if (won) 
    {
    messageElement.textContent = "Congratulations! You won the game!";
    messageElement.style.color = "green";
    }
    else 
    {
    messageElement.textContent = "Time's up! You lost the game.";
    messageElement.style.color = "red";
    }
    restartBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
    
    }

function endGame (won) {
    clearInterval(timerInterval);
    if (won) {
    messageElement.textContent = "Congratulations! You won the game!";
    messageElement.style.color = "green";
    } else {
    
    messageElement.textContent = "Time's up! You lost the game.";
    
    messageElement.style.color = "red";
    
    }
    
    restartBtn.classList.remove("hidden");
    
    submitBtn.classList.add("hidden");
    
}

submitBtn.addEventListener("click", () => {
    const reversedText = userInput.value;
    const correctReversedText = challengeText.split("").reverse().join("");
    
    if (reversedText === correctReversedText) 
    {
        if (level === 3 )  // LEVEL WILL BE 3 IN THE HOMEWORK
        {
            endGame(true);
        } 
            else 
            {
            level++;
            timeLeft = 45; // Reset timer for next level
            levelElement.textContent = level;
            messageElement.textContent = "Correct! Moving to the next level.";
            messageElement.style.color = 'green';
            userInput.value = "";
            setChallengeText();
            }
    }

    else 
    {
    messageElement.textContent = "Incorrect! Try again.";
    messageElement.style.color = 'red';
    }

});

restartBtn.addEventListener("click", startGame);
startGame();