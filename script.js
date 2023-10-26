const pianoKeys = document.querySelectorAll(".piano-btns .btn") // getting all keys


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




const pressedKey = (e) => {
    //check if the kat passed is in allkey array , if yes call playsound fun
    if (allKeys.includes(e.key)) playSound(e.key);
    // console.log(`no sound belong this key #${e.key}`)
}


document.addEventListener("keydown", pressedKey);