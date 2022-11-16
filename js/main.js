"use strict";

function invertiStringa(stringaDaInvertire) {
    stringaDaInvertire = stringaDaInvertire.trim();
    let risultatoInversione = '';

    // Per invertire la stringa, iniziamo a contare dalla fine, e scendiamo
    for (let i = stringaDaInvertire.length - 1; i >= 0; i--) {
        const carattere = stringaDaInvertire[i];
        risultatoInversione += carattere;
    }

    return risultatoInversione;
}

function isPalindrome(stringa) {
    if (stringa) {
        return invertiStringa(stringa).toLowerCase() === stringa.toLowerCase();
    }
    return false;
}

console.log(`${isPalindrome("")}`);