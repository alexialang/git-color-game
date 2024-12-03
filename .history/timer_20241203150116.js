setInterval(function ()){
    if( minutes === 0 && secondes === 1){
        document.getElementById("timer").textContent = "00 : 00";
    } else {
        secondes--;
        if(secondes == 0){
            minutes--;
            secondes = 60;
            if(minutes == 0) {
                minutes = minutes;
            }
        }
    }


}