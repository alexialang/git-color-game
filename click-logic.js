function setupColorGame() {
    const colorDivs = document.querySelectorAll('.color-div');
    const targetDiv = document.querySelector('#target-color');

    const targetColor = targetDiv.style.backgroundColor;

    colorDivs.forEach(div => {
        div.addEventListener('click', function() {
            checkColor(this, targetColor);
        });
    });
}

function checkColor(clickedDiv, targetColor) {
    const clickedColor = clickedDiv.style.backgroundColor;

    if (clickedColor === targetColor) {
        alert('Bravo ! Vous avez cliqué sur la bonne couleur.');
    } else {
        alert('Dommage ! Ce n’est pas la bonne couleur.');
    }
}