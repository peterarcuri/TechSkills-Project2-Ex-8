
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// ======================
// ======= STEP 1 =======
// ======================

function encryptLetter(letter, shiftValue) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index + shiftValue) % alphabet.length;
    return alphabet[newIndex];
};

// ======================
// ======= STEP 2 =======
// ======================

function encryptMessage(word, shiftValue) {
    let encryptedMessage = "";
    for (let i = 0; i < word.length; i++) {
        encryptedMessage += encryptLetter(word[i], shiftValue)
    }
    return encryptedMessage;
};

// ======================
// ======= STEP 3 =======
// ======================

function decryptLetter(letter, shiftValue) {
    const index = alphabet.indexOf(letter.toLowerCase());
    const newIndex = (index - shiftValue + alphabet.length) % alphabet.length;
    return alphabet[newIndex];
}


// ======================
// ======= STEP 4 =======
// ======================

function decryptMessage(word, shiftValue) {
    let decryptedMessage = "";
    for (let i = 0; i < word.length; i++) {
        decryptedMessage += decryptLetter(word[i], shiftValue);        
    }
    return decryptedMessage;
}

console.log(encryptMessage("BRUTUS", 3));

console.log(decryptMessage("euxwxv", 3));

// ======================
// ===== QUESTION =======
// ======================

// Yes, it will return "brutus" back. It's the inverse of the encrypt function, thus restoring the original message.
