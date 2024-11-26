window.onload = ingeven();
// Definieer een functie “ingeven”.
function ingeven(){
    const geboortejaar = prompt("geef je geboortejaar in");
    const leeftijdSterven = prompt("hoe oud denk je te worden?");
    const aantalKoffie = prompt("hoeveel koppen koffie drink je per dag?");

    if (geboortejaar == null || leeftijdSterven == null || aantalKoffie == null) {
        document.write("u heeft geannuleerd!");
        return false;
    }
    else if (geboortejaar.length == 0 || leeftijdSterven.length == 0 || aantalKoffie.length == 0) {
        document.write("u heeft niets ingegeven !");
        return false;
    }

    gbJaar = parseInt(geboortejaar);
    lftSterven = parseInt(leeftijdSterven);
    antlKoffie = parseInt(aantalKoffie);

    if (isNaN(gbJaar) || isNaN(lftSterven) || isNaN(antlKoffie)) {
        document.write("Dit is geen nummer");
        return false;
    }
    else{
        tonen(gbJaar, lftSterven, antlKoffie);
    }
}

function tonen(gbjaar, lftsterven, aantlKoffie){
    const huidigJaar = new Date().getFullYear();
    const ouderdom = huidigJaar - gbjaar;
    const resterendeJaren = lftsterven - ouderdom;
    const resterendeDagen = resterendeJaren * 365;
    const aantalKoppen = resterendeDagen * aantlKoffie;

    document.write(`je bent nu ${ouderdom}. Tegen ${aantlKoffie} koppen per dag zal je ${aantalKoppen} koppen koffie drinken als je ${lftsterven} jaar oud zal worden.`);
}
