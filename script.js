// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// let word = prompt("Type a word!");

// function palindromeChecker(forwardWord) {
//     let reversedWord = "";
//     for (i = forwardWord.length - 1; i >= 0; i--) {
//         reversedWord += forwardWord[i];
//     }   if (forwardWord === reversedWord) {
//         return "The word is a plaindrome!";
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
      } else {
          return false;
      }
  }

let pariDispari = prompt("Scegli, pari o dispari?");
let numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
let numeroComputer = getRandomNumber(0, 5);

let sum = numeroComputer + numeroUtente;

if (evenOdd(sum) && pariDispari === "pari" || !evenOdd(sum) && pariDispari === "dispari") {
    alert("Hai vinto!");
} else {
    alert("Hai perso...");
}




