function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function showMobileWarning() {
    if (isMobile()) {
        document.getElementById('mobile-warning-popup').style.display = 'block';
    }
}

function closePopup() {
    document.getElementById('mobile-warning-popup').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    showMobileWarning();
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('active');
};

document.addEventListener("DOMContentLoaded", function() {
    const passwordField = document.getElementById("password-display");
    passwordField.textContent = "Your new password"
})

const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const checkboxes = document.querySelectorAll('#include-upper, #include-lower, #include-symbols, #include-numbers');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const checkedBoxes = Array.from(checkboxes).filter((box) => box.checked);
        
        // If there is only one checkbox checked, prevent it from being unchecked
        if (checkedBoxes.length === 0) {
            checkbox.checked = true;
            alert("At least one character type must be selected for password generation.");
        }
    });
});


function generatePassword() {
    const passwordLength = parseInt(document.getElementById("password-length").value);
    const includeSymbols = document.getElementById("include-symbols").checked;
    const includeNumbers = document.getElementById("include-numbers").checked;
    const includeUppercase = document.getElementById("include-upper").checked;
    const includeLowercase = document.getElementById("include-lower").checked;
    
    if (isNaN(passwordLength) || passwordLength < 4) {
        alert("Error: Password length must be between 4 and 25 characters.");
        return;
    }

    if (passwordLength > 25) {
        alert("Error: Password length must be between 4 and 25 characters.");
        return;
    }

    let availableCharacters = [];

    if (includeNumbers) {
        availableCharacters = availableCharacters.concat(numbers)
    }
    if (includeSymbols) {
        availableCharacters = availableCharacters.concat(symbols)
    }
    if (includeUppercase) {
        availableCharacters = availableCharacters.concat(upperCase);
    }
    if (includeLowercase) {
        availableCharacters = availableCharacters.concat(lowerCase);
    }    

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor( Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex]
    }

    const passwordField = document.getElementById("password-display");
    passwordField.textContent = password;
    passwordField.style.color = "#0e0d0d";
    passwordField.style.fontStyle = "normal";
    passwordField.style.width = '${passwordLength * 10}px';

    return password;
}

document.getElementById("generate-btn").addEventListener("click", generatePassword);

document.getElementById("copy-btn").addEventListener("click", function() {
    const password = document.getElementById("password-display").textContent;
    
    if (password) {
        navigator.clipboard.writeText(password).then(function() {
            alert("Password copied to clipboard!");
        }).catch(function(error) {
            alert("Failed to copy password: " + error);
        });
    } else {
        alert("No password to copy!");
    }
});
