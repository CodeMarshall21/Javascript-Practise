function rolldice(){
    const dices = document.getElementById("numOfDice").value;
    const diceOutput = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    let dice = 0;

    for(let i = 0; i < dices; i++){
        dice = Math.floor(Math.random() * 6) + 1;
        values.push(dice);
        images.push(`<img src = "dice_images/dice${dice}.png" alt = "Dice ${dice}">`);
    }
    

    diceOutput.textContent = values.join(", ");
    diceImages.innerHTML = images.join(" ");
}