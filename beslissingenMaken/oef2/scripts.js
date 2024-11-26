


const punten = prompt("Geef punten in met 2 cijfers:");

if (punten == null) {
    document.write("u heeft geannuleerd!");
}
else if (punten.length == 0) {
    document.write("u heeft niets ingegeven !");
}
else if (isNaN(punten)){
    document.write("Dit is geen nummer!");
}
else if (punten.length != 2 || punten == 100){
    document.write("Geef de punten in met 2 cijfers!");
}
else if (punten >= 10 && punten <= 99){
    if(punten >= 95){
        document.write("De graad is: A+");
    }
    else if(punten >= 90){
        document.write("De graad is: A");
    }
    else if(punten >= 80){
        document.write("De graad is: B");
    }
    else if(punten >= 70){
        document.write("De graad is: C");
    }
    else if(punten >= 60){
        document.write("De graad is: D");
    }
    else if(punten >= 50){
        document.write("De graad is: E");
    }
    else{
        document.write("De graad is: F");
    }
}