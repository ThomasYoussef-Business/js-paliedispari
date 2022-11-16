"use strict";

/* --------------------------- Sezione palindromi --------------------------- */
/**
 * In questa sezione, l'utente deve inserire una parola, e devo dire all'utente se la
 * parola è un palindromo o meno.
 */
const parolaDaTestare = prompt("Inserisci una parola per vedere se è palindroma: ");
if (isPalindrome(parolaDaTestare)) {
    alert("La parola inserita è palindroma!");
} else {
    alert("La parola inserita non è palindroma...");
}

/* ---------------------- Sezione gioco pari o dispari ---------------------- */
/**
 * In questa parte dell'esercizio, devo prendere una scelta, pari o dispari, dall'utente.
 * Dopodichè, devo prendere un numero da 1 a 5 dall'utente, sanitizzandolo.
 * Una volta finita la parte input, dovrò generare un numero casuale da 1 a 5, aggiungerlo
 * al numero dell'utente, 
 */
const scelte = [
    "Pari",
    "Dispari"
];

let messaggioPromptScelta = `Scegli un'opzione dalle seguenti:
${assemblaStringaDiScelte(scelte)}`;
let errorePromptScelta = `Quella non è un'opzione!
Scegli un'opzione dalle seguenti:
${assemblaStringaDiScelte(scelte)}`

let sceltaUtente = sceltaValida(scelte, prompt(messaggioPromptScelta));

while (sceltaUtente == -1) {
    sceltaUtente = sceltaValida(scelte, prompt(errorePromptScelta));
}

sceltaUtente = scelte[sceltaUtente].toLowerCase();

messaggioPromptScelta = `Inserisci un numero da 1 a 5: `;
errorePromptScelta = `Questo input non è valido!
Inserisci un numero da 1 a 5: `
const delimitaInput = (x) => x > 5 || x < 1;
const numeroUtente = assicuraIntDaPrompt(messaggioPromptScelta, errorePromptScelta, delimitaInput);

const numeroMinimo = 1;
const numeroMassimo = 5;
const numeroCPU = Math.floor(Math.random() * (numeroMassimo - numeroMinimo + 1) + numeroMinimo);

const numeroFinale = numeroCPU + numeroUtente;
if ((isPari(numeroFinale) && sceltaUtente == "pari") || (!isPari(numeroFinale) && sceltaUtente == "dispari")) {
    alert(`Hai vinto! Il numero della CPU era ${numeroCPU}, ed il numero finale era ${numeroFinale}`);
} else {
    alert(`Hai perso... Il numero della CPU era ${numeroCPU}, ed il numero finale era ${numeroFinale}`);
}

/* ---------------------------- Sezione funzioni ---------------------------- */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
function isPalindrome(stringa) {
    if (stringa) {
        return invertiStringa(stringa).toLowerCase() === stringa.toLowerCase();
    }
    return false;
}

/* -------------------------------------------------------------------------- */
function sceltaValida(arrayDiScelte, scelta) {
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

/* -------------------------------------------------------------------------- */
function isPari(numero) {
    return numero % 2 == 0;
}

/* -------------------------------------------------------------------------- */
function assemblaStringaDiScelte(arrayDiScelte) {
    let stringaFinale = "";
    for (let i = 0; i < arrayDiScelte.length; i++) {
        const valoreDellArray = arrayDiScelte[i];
        stringaFinale += `${i + 1}. ${valoreDellArray}\n`;
    }
    return stringaFinale;
}

/* -------------------------------------------------------------------------- */
function assicuraFloatDaPrompt(primoMessaggioPrompt, errorePrompt, seVeroContinuaPrompt) {
    "use strict";
    let valoreConvertito = parseFloat(prompt(primoMessaggioPrompt));
    if (!isNaN(valoreConvertito) && !seVeroContinuaPrompt(valoreConvertito)) {
        return valoreConvertito; // Se il valore convertito va bene, ritorna quello
    }

    // Altrimenti, continua a chiederne uno nuovo fino a quando non va bene
    while (isNaN(parseFloat(valoreConvertito)) ||
        seVeroContinuaPrompt(parseFloat(valoreConvertito))) {
        valoreConvertito = prompt(errorePrompt);
    }

    return parseFloat(valoreConvertito);
}

/* -------------------------------------------------------------------------- */
function assicuraIntDaPrompt(primoMessaggioPrompt, errorePrompt, seVeroContinuaPrompt) {
    return parseInt(assicuraFloatDaPrompt(primoMessaggioPrompt, errorePrompt, seVeroContinuaPrompt));
}