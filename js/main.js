"use strict";

function invertiStringa(stringaDaInvertire) {
    stringaDaInvertire = stringaDaInvertire.trim();
    let risultatoInversione = '';

    for (let i = stringaDaInvertire.length - 1; i >= 0; i--) {
        const carattere = stringaDaInvertire[i];
        risultatoInversione += carattere;
    }

    return risultatoInversione;
}

console.log(invertiStringa("Ciao a tutti!"));