const pianoKeys = document.querySelectorAll(".piano-btns .btn") // getting all keys


let allKeys = [],
    audio = new Audio(`sound/play.wav`);



const playSound = (key) => {

    audio.src = `sound/${key}.wav`; // passing audio src based on key pressed 
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    console.log(clickedKey)
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // addz data-key value to the allKeys array
    // calling playSound function with passing data-key value as an argument
    key.addEventListener("click", () => playSound(key.dataset.key));
});




const pressedKey = (e) => {
    //check if the kat passed is in allkey array , if yes call playsound fun
    if (allKeys.includes(e.key)) playSound(e.key);
    console.log(`no sound belong this key #${e.key}`)
}



document.addEventListener("keydown", pressedKey);