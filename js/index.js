let button = document.getElementById("audioButton");
let sound = new Audio("../src/Neon_Lights.mp3")

function playSound(sound) {
    sound.play();
}

// Función para detener sonidos
function stopSound(sound) {
    sound.pause();
}

button.addEventListener("click", () => {
    stopSound(sound);
    playSound(sound);
})