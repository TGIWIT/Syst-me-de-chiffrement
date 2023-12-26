const baseShifts = [4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216,
    67108864, 268435456, 1073741824, 4294967296, 17179869184, 68719476736, 274877906944,
    1099511627776, 4398046511104, 17592186044416, 70368744177664, 281474976710656];

function getShiftForLetter(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letterIndex = alphabet.indexOf(letter.toLowerCase());
    if (letterIndex !== -1) {
      return baseShifts[letterIndex];
    } else {
      return 0;
    }
}

function customCaesarizeLetter(letter, shift) {
    if (/[A-Za-z]/.test(letter)) {
      const start = letter === letter.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(((letter.charCodeAt(0) - start + shift) % 26 + 26) % 26 + start);
    } else {
      return letter;
    }
}

function customCaesarize(text) {
    return [...text].map((letter, index) => {
      const shift = baseShifts[index % baseShifts.length];
      return customCaesarizeLetter(letter, shift);
    }).join('');
}

function customUncaesarizeLetter(letter, shift) {
    if (/[A-Za-z]/.test(letter)) {
      const start = letter === letter.toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
      return String.fromCharCode(((letter.charCodeAt(0) - start - shift) % 26 + 26) % 26 + start);
    } else {
      return letter;
    }
  }

function customUncaesarize(text) {
    return [...text].map((letter, index) => {
      const shift = baseShifts[index % baseShifts.length];
      return customUncaesarizeLetter(letter, shift);
    }).join('');
}

function encrypt() {
    const text = document.getElementById('inputText').value;
    const encryptedText = customCaesarize(text);
    const outputElement = document.getElementById('output');
    outputElement.innerText = 'Crypter: ' + encryptedText;
    outputElement.style.color = 'white';
}

function decrypt() {
    const text = document.getElementById('inputText').value;
    const decryptedText = customUncaesarize(text);
    const outputElement = document.getElementById('output');
    outputElement.innerText = 'Décrypter: ' + decryptedText;
    outputElement.style.color = 'white';
}