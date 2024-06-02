dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;

const diceImages = [
    "./images/dice1.png",
    "./images/dice2.png",
    "./images/dice3.png",
    "./images/dice4.png",
    "./images/dice5.png",
    "./images/dice6.png"
]

function rollDice() {
    document.querySelector(".img1").setAttribute("src",diceImages[dice1 - 1]);
    document.querySelector(".img2").setAttribute("src",diceImages[dice2 - 1]);   
}

rollDice();