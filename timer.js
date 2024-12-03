let minutes = 0;
let secondes = 30;
let intervalId;

// Fonction pour démarrer le compte à rebours
function startTimer() {
    intervalId = setInterval(function () {
        if (minutes === 0 && secondes === 1) {
            document.getElementById("timer").textContent = "00 : 00";
            let score = document.getElementById("score").value;
            
            // Affiche l'alerte
            alert(`Bravo ! Votre score est de : ${score}`);
            resetTimer(); // Réinitialise le timer après l'alerte
            
        } else {
            secondes--;
            if (secondes == 0) {
                minutes--;
                secondes = 30; // Passe à 30 secondes 
            }

            let formattedMinutes = minutes.toString().padStart(2, "0");
            let formattedSecondes = secondes.toString().padStart(2, "0");

            document.getElementById("timer").textContent = formattedMinutes + ":" + formattedSecondes;
        }
    }, 1000);
}

// Fonction pour réinitialiser le timer
function resetTimer() {
    clearInterval(intervalId); // Arrête l'intervalle actuel
    minutes = 0;
    secondes = 30; // Réinitialise les valeurs
    startTimer(); // Relance un nouveau compte à rebours
}


startTimer();
