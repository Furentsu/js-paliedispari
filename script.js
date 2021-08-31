// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let word = prompt("Type a word!");

function palindromeChecker(forwardWord) {
    let reversedWord = "";
    for (i = forwardWord.length - 1; i >= 0; i--) {
        reversedWord += forwardWord[i];
    }   if (forwardWord === reversedWord) {
        return "The word is a plaindrome!";
    }   else {
        return "No palindromes here...";    
    }
}   

console.log(palindromeChecker(word));

