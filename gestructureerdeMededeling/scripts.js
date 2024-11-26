// Een overschrijving met gestructureerde mededeling of OGM is een combinatie van drie groepen van drie, vier en vijf cijfers gescheiden door een schuine streep.

// Deze mededeling wordt in België vaak gebruikt om overschrijvingen automatisch te kunnen laten verwerken. Zo weet het computersysteem van de ontvanger onmiddellijk welke factuur betaald wordt. 
//Op deze manier is er geen personeel nodig om te gaan kijken welke rekeningen vereffend werden.

// De eerste tien cijfers zijn bijvoorbeeld een klantennummer of een factuurnummer.
// De laatste twee cijfers vormen het controlegetal dat verkregen wordt door van de voorgaande tien cijfers de rest bij Euclidische deling door 97 te berekenen (modulo 97).
// Uitzondering: Indien de rest 0 bedraagt, dan wordt als controlegetal 97 gebruikt.

// Voor en achter de cijfers worden drie plussen (+++) of sterretjes (***) gezet.

function controleerInvoer(invoer){
    const verbodenTekens = /[+]/;
    const gestructureerdFormaat = /^\+{3}\d{3}\/\d{4}\/\d{5}\+{3}$/;
    const numeriekFormaat = /^\d+$/;

    if(verbodenTekens.test(invoer) && gestructureerdFormaat.test(invoer) == false){
        document.write("Onjuist formaat, gebruik alleen cijfers of een geldig gestructureerd formaat");
        return false;
    }

    if(gestructureerdFormaat.test(invoer) == false && numeriekFormaat.test(invoer) == false){
        document.write("Je invoer mag alleen cijfers bevatten of een geldig gestructureerd formaat hebben");
        return false;
    }

    return true;
}

function berekenControlegetal(basisGetal){
    const rest = Number(basisGetal) % 97;
    return rest === 0 ? 97 : rest;
}

function maakGestructureerdeMededeling(basisGetal, controlegetal){
    const volledigNummer = `${basisGetal}${controlegetal.toString().padStart(2, '0')}`;
    const deel1 = volledigNummer.slice(0, 3);
    const deel2 = volledigNummer.slice(3, 7);
    const deel3 = volledigNummer.slice(7, 12);
    return `+++${deel1}/${deel2}/${deel3}+++`;
}

function genereerGestructureerdeMededeling(){
    const invoer = prompt("Voer een factuurnummer in (alleen cijfers of een geldig gestructureerd formaat zoals +++123/4567/89012+++):");

    if(controleerInvoer(invoer) !== false){
        let basisGetal;
        if(invoer.startsWith("+++")) {
            basisGetal = invoer.replace(/^\+{3}|\+{3}$|\/+/g, '');
        } else{
            basisGetal = invoer.padStart(10, '0');
        }

        const controlegetal = berekenControlegetal(basisGetal);
        const mededeling = maakGestructureerdeMededeling(basisGetal, controlegetal);
        document.write(`Je gestructureerde mededeling is: ${mededeling}`);
    }
}

genereerGestructureerdeMededeling();
