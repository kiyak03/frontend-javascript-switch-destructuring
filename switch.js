 // Opdracht 1: schrijf een functie calculate die de parameters a, b en operator verwacht. a en b zijn altijd cijfers.
// Als de operator 'add' wordt meegegeven, telt de functie a en b bij elkaar op en geeft dat terug
// Als de operator 'subtract' wordt meegegeven, trekt de functie a en b van elkaar af en geeft dat terug
// Als de operator 'multiply' wordt meegegeven, vermenigvuldigd de functie a en b met elkaar en geeft dat terug
// Als de operator 'divide' wordt meegegeen, deelt de functie a door b en geeft dat terug
// Verwachtte uitkomsten:
// calculate(3, 4, 'add') geeft 7
// calculate(5, 7, 'subtract') geeft -2
// calculate(25, 5, 'divide') geeft 5

 function calculate(a,b,operator){
    switch (operator){
        case "add":
            return a+b;
        case "substract":
            return a-b;
        case "multiply":
            return a*b;
        case "divide":
            return a/b;
        default:
            return "no operator";
    }
 }
console.log(calculate(3,4,"multiply"));



// Opdracht 2: schrijf een functie getErrorMessage die de parameter errorcode verwacht en de bijbehorende error message teruggeeft.
// errorcode is altijd een cijfer tussen de 0 en de 4 en hebben respectievelijk de volgende betekenis:
// 0: "Geen watertoevoer"
// 1: "Temperatuur te laag"
// 2: "Koffiebonen op"
// 3: "Afvalbak vol"
// 4: "Geen druk"
// Verwachtte uitkomsten:
// getErrorMessage(0) geeft "Geen watertoevoer"
// getErrorMessage(4) geeft "Geen druk"


