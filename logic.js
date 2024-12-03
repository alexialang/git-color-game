const colorDivs = document.querySelectorAll('.color-div');
const targetDiv = document.querySelector('#target-color');

const targetColor = targetDiv.style.backgroundColor;

colorDivs.forEach(div => {
    div.addEventListener('click', function() {
        checkColor(this, targetColor);
    });
});

function checkColor(clickedDiv, targetColor) {
    let scoreElement = document.querySelector('#score');
    let score = parseInt(scoreElement.textContent);

    const clickedColor = clickedDiv.style.backgroundColor;

    console.log(clickedColor)
    console.log(targetColor)
    if (clickedColor === targetColor) {
        score++;
        scoreElement.textContent = score;
        colorGeneration()
        alert("OUII")
    }
}

const colors = [
    '#FFB3BA', '#FFDFBA', '#FFFFBA', '#BAFFC9', '#BAE1FF',
    '#D5AAFF', '#FFC8DD', '#BDE0FE', '#A2D2FF', '#C3FBD8',
    '#FDE2E4', '#FAD2E1', '#E2ECE9', '#CDE7B0', '#FFE5EC',
    '#FBE7C6', '#F5F0BB', '#D0F4DE', '#A9DEF9', '#E4C1F9'
];

function colorGeneration() {
    const availableColors = [...colors];

    const targetColor = availableColors.splice(
        Math.floor(Math.random() * availableColors.length),
        1
    )[0];

    const targetColorDiv = document.getElementById('target-color');
    targetColorDiv.style.backgroundColor = targetColor;
    targetColorDiv.classList.add(targetColor);

    const colorDivs = document.querySelectorAll('.color-div');

    colorDivs.forEach(div => {
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const color = availableColors.splice(randomIndex, 1)[0];
        
        div.style.backgroundColor = color;
        div.id = color
    });

    const randomDiv = colorDivs[Math.floor(Math.random() * colorDivs.length)];
    randomDiv.style.backgroundColor = targetColor;
}

colorGeneration()