
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.



// FUNZIONI GENERICHE

// Randomizer
function randomizer(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}



//PROGRAMMA

// Creo l'array dei 5 numeri casuali con un croccante ciclo For

var numeriSimon = [];

for (var i = 0; i < 5; i++) {
 numeriSimon.push(randomizer(1,40));
}

console.log("Questi sono i numeri generati casualmente " + numeriSimon);

// Stampo l'alert con i numeri da ricordare:

alert("Ricorda bene i numeri " + numeriSimon);

// Definisco array numeri inseriti; uso setTimeOut per inserire una funzione con delay di 30 secondi dall'alert.
//All'interno uso un ciclo for lungo quanto l'array numeri simon e chiedo x prompt; i numeri inseriti nel prompt sono salvati in una variabile
// E infine pushati in un array numeriInseriti.

var numeriInseriti = [];

setTimeout(function () {

  for (var i = 0; i < numeriSimon.length; i++) {

    var num = parseInt(prompt("Inserisci qui i numeri di prima, uno alla volta:"));
    numeriInseriti.push(num);
  }

console.log("Questi sono i numeri che hai scritto tu: " + numeriInseriti)

  // Confronto i due array attraversandoli con un ciclo for e usando il metodo includes per ogni elemento del primo nei confronti del secondo.
  //In questo modo definisco il punteggio e i numeri indovinati.

  var numeriIndovinati = [];
  var punteggio = 0;

  for (var i = 0; i < numeriInseriti.length; i++) {

    if (numeriSimon.includes(numeriInseriti[i])) {
      numeriIndovinati.push(numeriInseriti[i]);
    }

  }

  alert("I numeri che hai indovinato sono: " + numeriIndovinati + ". Il tuo punteggio è: " + numeriIndovinati.length);
  console.log("Hai indovinato i numeri: " + numeriIndovinati + "; il tuo punteggio è: " + numeriIndovinati.length + " su " + numeriSimon.length + " punti massimi totalizzabili.");

}, 30000);
