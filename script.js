// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// let word = prompt("Type a word!");

// function palindromeChecker(forwardWord) {
//     let reversedWord = "";
//     for (i = forwardWord.length - 1; i >= 0; i--) {
//         reversedWord += forwardWord[i];
//     }   if (forwardWord === reversedWord) {
//         return "The word is a palindrome!";
//     }   else {
//         return "No palindromes here...";    
//     }
// }   

// alert(palindromeChecker(word));


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }

function evenOdd(num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
}

let pariDispari;
let numeroUtente;

while (pariDispari !== "pari" && pariDispari !== "dispari") {
    pariDispari = prompt("Scegli, pari o dispari? Non puoi scegliere altro!").toLowerCase();
}

while (numeroUtente <= 0 || numeroUtente > 5 || isNaN(numeroUtente)) {  //  isNaN just checks whether the passed value is not a number or cannot be converted into a Number. Number.isNaN on the other hand only checks if the value is equal to NaN. 
    numeroUtente = parseInt(prompt("Ora scegli un numero da 1 a 5"));
}

let numeroComputer = getRandomNumber(1, 5);

let sum = numeroComputer + numeroUtente;

if (evenOdd(sum) && pariDispari === "pari" || !evenOdd(sum) && pariDispari === "dispari") {
    alert("Hai vinto!");
} else {
    alert("Hai perso...");
}





