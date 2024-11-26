








        let header = 0; 
        for(let i =1; i<=6; i++){
            header++;
            document.write(`<h${header}>Hallo wereld ${i}`);
        }




// Vraag aan de gebruiker hoeveel automerken hij wil ingeven. Deze moeten bijgehouden worden in een array.


        let automerken = [];
        let autoMerk = "";
        const autoMerkAantal = prompt("hoeveel merken wil je ingeven?");
        for(let i =1; i<= autoMerkAantal; i++){

            autoMerk = prompt("Geef je automerk in.");
            automerken.push(autoMerk);
        }
        
        for(let i = 0; i <= automerken.length; i++){
            document.write(`<li>${automerken[i]}</li>`);
        }


// Als alle merken opgevraagd zijn, toon je deze met een tweede herhalingslus, op volgende wijze:

