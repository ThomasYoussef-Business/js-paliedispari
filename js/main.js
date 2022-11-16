"use strict";

// const parolaDaTestare = prompt("Inserisci una parola per vedere se è palindroma: ");
// if (isPalindrome(parolaDaTestare)) {
//     alert("La parola inserita è palindroma!");
// } else {
//     alert("La parola inserita non è palindroma...");
// }

const scelte = [
    "Pari",
    "Dispari"
];

let sceltaUtente = isScelta(scelte, prompt(`Scegli un'opzione dalle seguenti:
${assemblaStringaScelta(scelte)}`));
while (sceltaUtente == -1) {
    sceltaUtente = isScelta(scelte, prompt(`Quella non è un'opzione!
Scegli un'opzione dalle seguenti:
${assemblaStringaScelta(scelte)}`));
}

sceltaUtente = scelte[sceltaUtente].toLowerCase();



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


function isScelta(arrayDiScelte, scelta) {
    // Se la scelta è valida, ritorniamo l'index di quella scelta, altrimenti -1
    const parsedScelta = parseInt(scelta);
    if (!parsedScelta || parsedScelta < 0) {
        return -1;
    }

    if (arrayDiScelte[parsedScelta - 1]) {
        return parsedScelta - 1;
    }

    for (let i = 0; i < arrayDiScelte.length; i++) {
        const valoreArray = arrayDiScelte[i - 1];
        if (valoreArray === scelta) {
            return i;
        }
    }
    return -1;
}

function assemblaStringaScelta(arrayDiScelte) {
    let stringaFinale = "";
    for (let i = 0; i < arrayDiScelte.length; i++) {
        const valoreDellArray = arrayDiScelte[i];
        stringaFinale += `${i + 1}. ${valoreDellArray}\n`;
    }
    return stringaFinale;
}