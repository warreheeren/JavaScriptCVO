

const gewicht = parseFloat(prompt("Wat is je gewicht?"));

if (gewicht == null) {
    document.write("u heeft geannuleerd!");
}

else if (gewicht == 0) {
    document.write("u heeft niets ingegeven !");
}

else if(gewicht > 0){

    const lengte = parseFloat(prompt("Wat is je lengte?"));

    if (lengte == null) {
        document.write("u heeft geannuleerd!");
    }

    else if (lengte.length == 0) {
        document.write("u heeft niets ingegeven !");
    }

    else if(lengte > 0){

        const bmi = gewicht / (lengte * lengte);
        const afgerondBmi = bmi.toFixed(2)

        if(bmi < 18.5){
            document.write(`Uw bmi is ${afgerondBmi}, dus onder 18.5, dat betekent dat u een ondergewicht heeft`);
        }

        else if(bmi >= 18.5 && bmi < 25){
            document.write(`Uw bmi is ${afgerondBmi}, dus tussen 18.5 en 25, dat betekent dat u een gezond gewicht heeft`);
        }

        else if(bmi >= 25 && bmi < 30){
            document.write(`Uw bmi is ${afgerondBmi}, dus tussen 25 en 30, dat betekent dat u een overgewicht heeft`);
        }

        else if(bmi >= 30){
            document.write(`Uw bmi is ${afgerondBmi}, dat betekent dat u een obesitas heeft`);
        }
    }
}
