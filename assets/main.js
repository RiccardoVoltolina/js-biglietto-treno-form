/* Descrizione:
 Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in solo console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Consigli:
non usate bootstrap, fate a mano per ora meno cose dobbiamo gestire e meglio é.
per semplificarvi un pó la vita almeno per ora non usate il tag form per racchiudere gli input ma metteteli semplicemente in un div.  div>input e non form>input
Bonus (opzionale):
Prova a racchiudere gli input ed il bottone in un tag form e prova a far funzionare il form evitando che la pagina si refreshi quando il form viene inviato cliccando su genera.
Questo richiederá un minimo di ricerca per capire come usare il parametro e dentro la funzione anonima dell'event listener. function(e){ console.log(e) }
Ricordate, molte cose nella vita se fatte per la prima volta risultano difficili se non quasi impossibili, ma é perseverando e soprattutto sbagliando che impariamo. Che la forza sia con voi! */





/* SVOLGIMENTO */

/* prompt numero km */

document.getElementById("generate").addEventListener("click", function(){
    const userName = document.getElementById("firstName").value;
    const numberKm = document.getElementById("Km").value;
    const customerAge = document.getElementById("Age").value;
    console.log(userName, numberKm, customerAge);
    const noDiscountPrice = (numberKm * 0.21).toFixed (2)
    const discount_40 = (noDiscountPrice * 40 / 100 )
    const totalDiscount_40 = (noDiscountPrice - discount_40).toFixed (2) 
    const discount_20 = (noDiscountPrice * 20 / 100 )
    const totalDiscount_20 = (noDiscountPrice - discount_20).toFixed (2)  
    if (customerAge > 65) {

        console.log('complimenti, hai diritto a uno sconto del 40%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_40 + '$' );
    } else if (customerAge < 18) {
        console.log('complimenti, hai diritto a uno sconto del 20%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_20 + '$' );
    } else {
        console.log('Il prezzo finale del tuo biglietto è di ' + noDiscountPrice + '$');
    } 
    document.getElementById("customer").innerHTML = userName
    document.getElementById("Km").innerHTML = numberKm
    document.getElementById("Age").innerHTML = customerAge
    document.getElementById("ticketPrice").innerHTML = totalDiscount_20

})



/* const numberKm = Number (prompt ('Quanti km desideri percorrere?'));

if (isNaN (numberKm)) {
    alert('Scrivi gentilmente in caratteri numerici');
    location.reload();
} */

/* prompt età */

/* const customerAge = Number (prompt ('Quanti anni hai?'));

if (isNaN (customerAge)) {
    alert('Scrivi gentilmente in caratteri numerici');
    location.reload();
}
 */

/* valore biglietto senza sconti */

/* const noDiscountPrice = (numberKm * 0.21).toFixed (2)

console.log(noDiscountPrice);
 */
/* determino se ha più di 65 anni o meno di 18 anni */

/* const discount_40 = (noDiscountPrice * 40 / 100 )

const totalDiscount_40 = (noDiscountPrice - discount_40).toFixed (2)

const discount_20 = (noDiscountPrice * 20 / 100 )

const totalDiscount_20 = (noDiscountPrice - discount_20).toFixed (2)

if (customerAge > 65) {

    console.log('complimenti, hai diritto a uno sconto del 40%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_40 + '$' );
} else if (customerAge < 18) {
    console.log('complimenti, hai diritto a uno sconto del 20%. Il prezzo finale del tuo biglietto sarà di: ' + totalDiscount_20 + '$' );
} else {
    console.log('Il prezzo finale del tuo biglietto è di ' + noDiscountPrice + '$');
} */

