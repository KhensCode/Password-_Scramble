function scramble() {
    const inputField = document.getElementById('password');
    const password = inputField.value.trim();
    const less = document.getElementById('small');
    const most = document.getElementById('big');
    const scrambleButton = document.getElementById('scramble');
    const scramblingText = document.getElementById('scrambling');

    // Reset error messages and scrambling text
    less.style.display = 'none';
    most.style.display = 'none';
    scramblingText.style.display = 'none';

    if (!password) {
        return; // Do nothing if the input is empty
    }

    if (password.length < 6) {
        less.style.display = 'block';
        return; // Exit if password length is less than 6
    }
    if (password.length > 25) {
        most.style.display = 'block';
        return; // Exit if password length is greater than 25
    }

    // Show "Scrambling..."
    scrambleButton.style.display = 'none';
    scramblingText.textContent = 'Scrambling...';
    scramblingText.style.display = 'block';

    const substitutions = {
        A: '8', B: '$', C: 'x', D: '#', E: '1', F: '@',
        G: 'D', H: '*', I: '!', J: '%', K: '4', L: '^',
        M: '&', N: '6', O: '7', P: '(', Q: ')', R: '/',
        S: '+', T: '=', U: '-', V: '_', W: '5', X: '~',
        Y: '{', Z: '}', 
        '0': 'Z', '1': 'Q', '2': 'A', '?': 'M', '4': 'T',
        '5': 'H', '6': 'J', '7': 'R', '8': '.', '9': 'E'
    };

    let scrambled = '';
    for (let char of password) {
        const randomCase = Math.random() > 0.5;
        let substitution = substitutions[char.toUpperCase()] || char;
        scrambled += randomCase ? substitution.toUpperCase() : substitution.toLowerCase();
    }

    scrambled = scrambled.split('').sort(() => Math.random() - 0.5).join('');

    setTimeout(() => {
        inputField.value = scrambled;

        // Reset the button display
        scramblingText.style.display = 'none';
        scrambleButton.style.display = 'block';
    }, 2000); // 2-second delay before showing scrambled password
}

function Scrambling() {
    const scrambleButton = document.getElementById('scramble');
    const scramblingText = document.getElementById('scrambling');
    const inputField = document.getElementById('password');
    const password = inputField.value.trim();

    if (!password || password.length < 6 || password.length > 25) {
        return; 
    }

    scrambleButton.style.display = 'none';
    scramblingText.textContent = 'Scrambling...';
    scramblingText.style.display = 'block';

    setTimeout(scramble, 2000); 
}
