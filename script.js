const button = document.getElementById('make-waffle');
if (button) {
    button.addEventListener('click', () => {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = "personality.html";
        }, 1500);
    });
}

const button2 = document.getElementById('reveal-personality');
if (button2) {
    button2.addEventListener('click', () => {
        let warrior = 0;
        let sweetheart = 0;
        let chaos = 0;
        let royal = 0;

        const topping = document.querySelector('input[name="topping"]:checked').value;
        const crispy = document.querySelector('input[name="crispy"]:checked').value;
        const sauce = document.querySelector('input[name="sauce"]:checked').value;

        if (topping === 'strawberry') {
            sweetheart += 2;
        } else if (topping === 'chocolate') {
            chaos += 2;
        } else if (topping === 'blueberries') {
            sweetheart += 1;
            royal += 1;
        } else if (topping === 'butter') {
            royal += 2;
        }

        if (crispy === 'super-crispy') {
            warrior += 2;
        } else if (crispy === 'crispy-fluffy') {
            royal += 2;
        } else if (crispy === 'soft') {
            sweetheart += 2;
        }

        if (sauce === 'maple') {
            royal += 2;
        } else if (sauce === 'chocolate') {
            chaos += 2;
        } else if (sauce === 'caramel') {
            chaos += 1;
            sweetheart += 1;
        } else if (sauce === 'none') {
            warrior += 2;
        }

        let finalPersonality = "";
        let maxScore = Math.max(warrior, sweetheart, chaos, royal);

        if (maxScore === sweetheart) {
            finalPersonality = "Sweetheart";
        } else if (maxScore === chaos) {
            finalPersonality = "Chaos";
        } else if (maxScore === royal) {
            finalPersonality = "Royal";
        } else if (maxScore === warrior) {
            finalPersonality = "Warrior";
        } else {
            finalPersonality = "Mystery"; 
        }

        const resultDisplay = document.getElementById("result");
        if (resultDisplay) {
            resultDisplay.textContent = `You are a ${finalPersonality} Waffle!`;
            resultDisplay.style.color = "#000";
        }
    });
}

const allRadioButtons = document.querySelectorAll('input[type="radio"]');
const resultBox = document.getElementById('result');

allRadioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        if (resultBox) {
            resultBox.style.border = "2px dashed #ffb6c1"; 
            resultBox.style.backgroundColor = "#fff0f5";
            resultBox.style.padding = "15px";
            resultBox.style.borderRadius = "8px";
            
            if (resultBox.textContent === "" || resultBox.textContent === "Calculating your vibe...") {
                resultBox.textContent = "Calculating your vibe...";
                resultBox.style.color = "#888";
            }
        }
    });
});