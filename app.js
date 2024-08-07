
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";


// ======================
// ======= STEP 1 =======
// ======================

function encryptLetter(letter, shiftValue) {
    
    // goes through every letter of variable "alphabet" to lower case
    
    const index = alphabet.indexOf(letter.toLowerCase()); 

    // new index adds the shift value to 'index'; modulus operator ensures that it'll wrap around the entire alphabet if necessary
    
    const newIndex = (index + shiftValue) % alphabet.length; 
    return alphabet[newIndex];
};

// ======================
// ======= STEP 2 =======
// ======================

function encryptMessage(word, shiftValue) {
    let encryptedMessage = "";

    // create for loop to loop through entire length of whatever word we receive; then append encryptedMessage to the encryptLetter function
    
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

    // same as encrypt function but in reverse (subtracting the shift value from index)
    
    const newIndex = (index - shiftValue + alphabet.length) % alphabet.length; 
    return alphabet[newIndex];
}


// ======================
// ======= STEP 4 =======
// ======================

function decryptMessage(word, shiftValue) {
    let decryptedMessage = "";

    // create a for loop to loop through an entire word or message, then append decryptedMessage to the decryptLetter function
        
    for (let i = 0; i < word.length; i++) {
        decryptedMessage += decryptLetter(word[i], shiftValue);        
    }
    
    // will return the message back to its original state
    return decryptedMessage;
}

console.log(encryptMessage("BRUTUS", 3));

console.log(decryptMessage("euxwxv", 3));

// ======================
// ===== QUESTION =======
// ======================

// Yes, it will return "brutus" back. It's the inverse of the encrypt function, thus restoring the original message.
