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
const targetAge = document.getElementById("clientAge");
const targetDistance = document.getElementById("clientKm");

//dati dell'utenza
const userAge = parseInt(prompt(" Inserisci la tua età" , "70"));
const userKm = parseInt(prompt(" Quale distanza vuoi percorrere (in km)" , "50"));
if(isNaN(userAge)){
    alert("il campo dell'età non può contenere lettere o caratteri speciali")
}else if(isNaN(userKm)){
    alert("la distanza inserita non è valida (ricorda di non inserire i KM)")
}else{
    // prezzo del biglietto
    let price = userKm * 0.21;
    //sconti relativi all'età
    if (userAge <= 18){
        youngDiscount = price * 20 / 100;
        price = price - youngDiscount;
    }
    
    if (userAge >= 65){
        elderDiscount = price * 40 / 100;
        price = price - elderDiscount;
    }
    //dispongo il prezzo in forma umana
    targetTag.innerText = `Risultato: Ecco il prezzo del tuo biglietto ${(Math.round(price * 100) / 100).toFixed(2)}`;
    targetAge.innerText = `Età inserita ${userAge}`;
    targetDistance.innerText = `Distanza specificata: ${userKm}`;

}