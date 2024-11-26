        
        
        
        
        
        
        
        let automerken = [];
        const autoMerkAantal = prompt("hoeveel merken wil je ingeven?");
        for(let i =1; i<= autoMerkAantal; i++){

            let autoMerk = prompt("Geef je automerk in.");
            automerken.push(autoMerk);
        }

        let lengte = automerken.length;
        lengte--;
        document.write("<h4>U gaf de volgende merken in:</h4>");
        for(let i = 0; i <= lengte; i++){
            document.write(`<li>${automerken[i]}</li>`);
        }
