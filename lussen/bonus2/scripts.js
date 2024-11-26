


const scores = [309,400,1000,40009];
let grootsteGetal = scores[0];

for(let i = 0; i < scores.length ;i++){

    if(grootsteGetal < scores[i]){

        grootsteGetal = scores[i];
        document.write(`<p>Het grootste getal is: ${grootsteGetal} en staat in de array op positie: ${scores.indexOf(grootsteGetal)}</p>`);
        
    }
}

