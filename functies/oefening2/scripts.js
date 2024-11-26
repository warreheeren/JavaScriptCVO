// Zorg dat de code strict is.
"use strict";
let getallen = [];
let aantal = prompt("hoeveel getallen wil je ingeven?");
aantal = controleAantal(aantal);

if(aantal !== false){
    for(let i = 0; i < aantal; i++){
        const getal = parseInt(prompt("geef een getal in"));
        const validatie = controleGetal(getal)
        if(validatie !== false){
            getallen.push(validatie);
        }
    }
}

document.write(getallen.join(", "));

 function controleAantal(invoerAantal){
    if (invoerAantal === null) {
        document.write("u heeft geannuleerd!");
        return false;
    }
    else if (invoerAantal.length === 0) {
        document.write("u heeft niets ingegeven !");
        return false;
    }

    const aantal = parseInt(invoerAantal);

    if (isNaN(aantal) || aantal <= 0){
        document.write("dit is geen nummer !");
        return false;
    }
    else{
        return aantal;
    }
 }

 function controleGetal(getalInvoer){
    if (getalInvoer === null || getalInvoer.length === 0 || isNaN(getalInvoer)) {
        getallen.push("fout");
        return false;
    }
    else{
        return getalInvoer;
    }
 }

