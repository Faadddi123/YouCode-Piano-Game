const pianoKeys = document.querySelectorAll(".piano-btns .btn") // getting all keys
const bg1Btn = document.getElementById("bg1")
const bg2Btn = document.getElementById("bg2")

let allKeys = []

const playSound = (key) => {
    audio = new Audio(`sound/${key}.wav`);
    audio.src = `sound/${key}.wav`; // passing audio src based on key pressed 
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    console.log(clickedKey)
    // adding active class depend of wich key blakc or white
    if (clickedKey.classList.contains("white")) clickedKey.classList.add("activeWhite");
    else {
        clickedKey.classList.add("activeBlack");
    }
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("activeBlack");
        clickedKey.classList.remove("activeWhite");
    }, 200);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // addz data-key value to the allKeys array
    // calling playSound function with passing data-key value as an argument
    key.addEventListener("keydown", () => playSound(key.dataset.key));
});


audioBG1 = new Audio(`sound/backgroundSound.mp3`);
audioBG2 = new Audio(`sound/backgroundSound2.mp3`);

const playBG1 = () => {
    if (bg1Btn.classList.contains("checked")) {
        bg1Btn.classList.remove("checked");
        audioBG1.pause();
    }
    else {
        bg1Btn.classList.add("checked");

        audioBG1.play(); // playing audio
    }

}

const playBG2 = () => {
    if (bg2Btn.classList.contains("checked")) {
        bg2Btn.classList.remove("checked");
        audioBG2.pause();
    }
    else {
        bg2Btn.classList.add("checked");

        audioBG2.play(); // playing audio
    }

}


const pressedKey = (e) => {
    //check if the kat passed is in allkey array , if yes call playsound fun
    if (allKeys.includes(e.key)) playSound(e.key);
    console.log(`no sound belong this key #${e.key}`)
}
bg1Btn.addEventListener("click", playBG1)
bg2Btn.addEventListener("click", playBG2)

document.addEventListener("keydown", pressedKey);