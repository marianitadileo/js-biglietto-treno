const kmJourney = parseInt(prompt("Quanti chilometri dovrai percorrere?"));
const ageUser = parseInt(prompt("Quanti anni hai?"));
console.log(kmJourney, ageUser);

const priceKm = 0.21

const priceJourney = kmJourney * priceKm;
console.log(priceJourney);

let discountJunior = ""; 
let discountOver = "";
let reducedPrice = ""; 

if(ageUser < 18) {
    discountJunior = 0.02;
    reducedPrice = priceJourney - discountJunior; 
    reducedPrice = reducedPrice.toFixed(2); 
    console.log(reducedPrice);
    document.getElementById('price').innerHTML = "Il costo del biglietto sarà " + reducedPrice + "€";
} else if (ageUser > 65) {
    discountOver = 0.4;
    reducedPrice = priceJourney - discountOver;
    reducedPrice = reducedPrice.toFixed(2); 
    console.log(reducedPrice);
    document.getElementById('price').innerHTML = "Il costo del biglietto sarà " + reducedPrice + "€";
} else {
    fullPrice = "Spiacenti, non è previsto nessuno sconto";
    console.log(priceJourney);
    document.getElementById('price').innerHTML = "Spiacenti, non è previsto nessuno sconto. Il costo del biglietto è " + priceJourney + "€";
}



 