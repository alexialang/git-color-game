setInterval(function (){
    if( minutes === 0 && secondes === 1){
        document.getElementById("timer").textContent = "00 : 00"; // Si le minuteur
    } else {
        secondes--; // Décrémentation des secondes, chaque seconde la variable diminue de 1
        if(secondes == 0){
            minutes--;
            secondes = 30;
            if(minutes == 0) {
                minutes = minutes;
            }
        }

        if(secondes === 30){
            let score = document.getElementById("score").value;
            alert(`Bravo ! Votre score est de : ${score}`);
            window.location.reload(true);
        }

        if(minutes.toString().length == 1){
            minutes = "0" + minutes;
        }

        if(secondes.toString().length == 1){
            secondes = "0" + secondes;
        }

        document.getElementById("timer").textContent = minutes + ":" + secondes;
    }
}, 1000)