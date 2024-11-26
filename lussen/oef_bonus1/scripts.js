

const nummers = [13, 23, 12, 45, 22, 48, 66, 100];
const evenNummers = [];
for(let i = 0; i < nummers.length; i++){
    if (nummers[i] % 2 === 0) {
        evenNummers.push(nummers[i]);
    }
}
document.write(`${evenNummers}`);



let zin = prompt("geef een zin in");
let tellerArray = new Array(26).fill(0);

for (let i = 0; i < zin.length; i++) {
    let char = zin[i].toLowerCase(); 
    let charCode = char.charCodeAt(0);

    
    if (charCode >= 97 && charCode <= 122) {
        let index = charCode - 97;
        tellerArray[index]++;
    }
}


document.write(`<p>Dit is de zin: ${zin}</p>`);

for (let i = 0; i < 26; i++) {
    
    if (tellerArray[i] > 0) {
        let letter = String.fromCharCode(i + 97);
        document.write(`<p>Letter ${letter} komt ${tellerArray[i]} keer voor.</p>`);
    }
}