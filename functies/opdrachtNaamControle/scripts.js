// Definieer 2 variabelen:
let voornaam = prompt("Wat is je voornaam?");
let achternaam = "";
if(controle(voornaam) != false){
    achternaam = prompt("Wat is je achternaam?");
    controle(achternaam);
    if(controle(achternaam) != false){
        document.write(`Hey, ${voornaam} ${achternaam}`);
    }
}
// Definieer een functie controle.
function controle(naamGebruiker){
    if(naamGebruiker == null){
        document.write("Je hebt geanuleerd");
        return false;
    }
    else if(naamGebruiker.length == 0){
        document.write("u heeft niets ingegeven !");
        return false;
    }
    else if(naamGebruiker.length <= 2){
        document.write("Dit is geen naam!");
        return false;
    }
    else{
        const returnName = naamGebruiker.charAt(0).toUpperCase() + naamGebruiker.slice(1);
        return returnName;
    }
}