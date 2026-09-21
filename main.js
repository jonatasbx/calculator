function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

function operation(n1, operator, n2){
    const operators = ["+","-","*","/","%",",","@"]
     if (typeof n1 !== "number" || typeof n2 !== "number" || !operators.includes(operator)) {
        throw new Error("Insira apenas números e operadores");
  }
    switch(operator){
        case "+":
            return n1 + n2;
        case "-":
            return n1 - n2;
        case "*":
            return n1 * n2;
        case "/":
            if (n2 === 0) throw new Error("Divisão por zero");
            return n1 / n2;
        case "%":
            return n1 * (n2/100);
        default:
            throw new Error(`Operador não suportado: ${operator}`);
    }
}

