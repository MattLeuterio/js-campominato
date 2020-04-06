 /**********************************************
  * 
  *  CAMPO MINATO
  * 
  **********************************************/

 !console.log('*****CAMPO MINATO*****');

 /**
  *  Descrizione
    Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
    
    Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina,   altrimenti si continua chiedendo all’utente un altro numero.

    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo  possibile di numeri consentiti.

    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che  l’utente ha inserito un numero consentito.


    _______________________________________________________________________
    BONUS:
    All’inizio il software richiede anche una difficoltà all’utente
    che cambia il range di numeri   casuali:

    con difficoltà 0 => tra 1 e 100
    con difficoltà 1 =>  tra 1 e 80
    con difficoltà 2=> tra 1 e 50
  */

 var posBombe = [];
 var contBombeInserite = 0;

 var numeriUtente = [];
 var contNumeriUtente = 0;

 var diff = 0;
 var rangeMax = 0;

// Chiediamo la difficoltà all'utente

var sceltaDiff = parseInt(prompt('Scegli il livello di difficoltà\n0 -> facile\n1 -> normale\n 2 -> difficile'))

while (isNaN(sceltaDiff) || sceltaDiff === ' ' || sceltaDiff > 2) {
    sceltaDiff = parseInt(prompt('Inserisci un numero tra i seguenti:\n0 -> facile\n1 -> normale\n 2 -> difficile'))
}

if (sceltaDiff == 0) {
    diff = 84;
    rangeMax = 100;
} else if (sceltaDiff == 1) {
    diff = 64;
    rangeMax = 80;
} else {
    diff = 34;
    rangeMax = 50;
}

console.log('Difficoltà Scelta: ' + sceltaDiff);
console.log(diff);
console.log(rangeMax);

  // Generare 16 numeri casuali tra 1 e 100 (posizione Bombe) - Nessun doppione.

  while (contBombeInserite < 16) {
    numeroPosizioneBomba = getRandomInt1and100();
    if (posBombe.includes(numeroPosizioneBomba) == false) {
        posBombe.push(numeroPosizioneBomba);
        contBombeInserite++
    }     
}

 // chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.

 var numUt = parseInt(prompt('Inserisci il primo numero'))

 // Controllo se la scelta è nel range della difficoltà
 checkRange(numUt);
 

  while (contNumeriUtente < rangeMax) {
      switch (contNumeriUtente < rangeMax) {
          case posBombe.includes(numUt) == true:
              alert('BOOOOM! Sei appena saltata in aria!\nIl tuo punteggio: ' + numeriUtente.length + '/' + rangeMax );
              contNumeriUtente = 150;
              break;
          case numeriUtente.includes(numUt) == true:
               numUt = parseInt(prompt('Num già inserito, prova con un altro'));
               break;
          case posBombe.includes(numUt) == false && numeriUtente.includes(numUt) == false:
                numeriUtente.push(numUt);
                contNumeriUtente++;
                numUt = parseInt(prompt('Inserisci un nuovo numero'));
                checkRange(numUt);
                break;            
      }
  }

  
 //Feedback    
 if (contNumeriUtente == rangeMax) {
    alert('HAI VINTO!!!'); 
 } 

 console.table('Le Bombe erano in queste posizioni: ', posBombe);
 

  // funzioni
  function getRandomInt1and100(num) {
    return Math.floor(Math.random() * rangeMax) + 1;
  }

  function checkRange(num) {
    while (numUt > rangeMax || numUt == 0) {
        numUt = parseInt(prompt('Il numero deve essere compreso fra 1 e ' + rangeMax));
     }
  }