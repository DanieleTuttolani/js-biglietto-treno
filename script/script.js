console.log("js ok")



//lista *******************************************
/*  
0- prendere il target dal documento
1- chiedere dati all'utente
2- calcolare prezzo biglietto in base alle specifiche
3- inserire le 2 possibilità di sconto relative all'età
4- esporre prezzo finale in forma umana
*/

const targetTag = document.getElementById("target");

//dati dell'utenza
const userAge = parseInt(prompt(" Inserisci la tua età" , "70"));
const userKm = parseInt(prompt(" Quale distanza vuoi percorrere (in km)" , "50"));

// prezzo del biglietto
let price = userKm * 0.21;
//sconti relativi all'età
if (userAge <= 18){
    youngDiscount = price * 20 / 100;
    finalPrice = price - youngDiscount;
}

if (userAge >= 65){
    elderDiscount = price * 40 / 100;
    finalPrice = price - elderDiscount;
}
//dispongo il prezzo in forma umana
targetTag.innerText = `Risultato: Ecco il prezzo del tuo biglietto ${(Math.round(finalPrice * 100) / 100).toFixed(2)
}`;