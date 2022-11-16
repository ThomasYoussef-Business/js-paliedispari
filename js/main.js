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

const isPalindrome = (stringa) => stringa ? invertiStringa(stringa).toLowerCase() === stringa.toLowerCase() : false;

console.log(`${isPalindrome("")}`);