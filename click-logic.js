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
    let scoreElement = document.querySelector('#score');
    let score = parseInt(scoreElement.textContent);

    const clickedColor = clickedDiv.style.backgroundColor;

    if (clickedColor === targetColor) {
        score++;
        scoreElement.textContent = score;
    }
}