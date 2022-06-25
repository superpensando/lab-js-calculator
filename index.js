const num1 = prompt("Piensa y anota un número");
const num2 = prompt("Piensa y anota otro número");
const operator = prompt("Que hacemos con ellos? Anota el operador: suma +, resta -, multiplación * o división / ");

if (num1 && num2 && operator) {

    function calculator(num1,num2,operator){
        //let result = num1 + operator + num2; 
       // alert("The result is : " + result);
        switch(operator){
            case "+" : 
                let resultSum = num1 + num2; 
                alert(`The result is : ${resultSum}`);
                break;
            case "-" :
                let resultRest = num1 - num2; 
                alert(`The result is : ${resultRest}`);
                break;
            case "*" :
                let resultMult = num1 * num2; 
                alert(`The result is : ${resultMult}`);
                break;
            case "/" :
                let resultDiv = num1 / num2; 
                alert(`The result is : ${resultDiv}`);
                break;
        }
    }

    alert("Vamos a calcular!");
    calculator(parseInt(num1),parseInt(num2), operator);

} else {
    alert("Faltan datos!")
}