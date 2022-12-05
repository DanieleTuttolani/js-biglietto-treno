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
const userAge = parseInt(prompt(" Inserisci la tua età" , "18"));
const userKm = parseInt(prompt(" Quale distanza vuoi percorrere (in km)" , "50"));

// prezzo del biglietto
const userPrice = userKm * 0.21;
