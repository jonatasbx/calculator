function add(n1, n2){
    return n1 + n2
}
function subtract(n1, n2){
    return n1 - n2
}
function multiply(n1, n2){
    return n1 * n2
}
function divide(n1, n2){
    if (n2 === 0) throw new Error("Divisão por zero");
            return n1 / n2;
}
function percent(n1,n2){
    return n1 * (n2/100);
}

function operation(n1, operator, n2){
    const operators = ["+","-","*","/","%"]
     if (Number.isNaN(n1) || Number.isNaN(n2) || !operators.includes(operator)) {
        throw new Error("Insira apenas números e operadores");
  }
    switch(operator){
        case "+":
            return add(n1,n2);
        case "-":
            return subtract(n1,n2);
        case "*":
            return multiply(n1,n2);
        case "/":
            return divide(n1,n2);
        case "%":
            return percent(n1,n2);
        default:
            throw new Error(`Operador não suportado: ${operator}`);
    }
}

// Criação dos elementos HTML para manilpulação

// Elementos HTML
const inputCalc = document.getElementById("digit");
const resultCalc = document.getElementById("result");
const buttons = document.querySelectorAll("button");

function calcular() {
    try {
    const [n1, op, n2] = inputCalc.value
        .split(/([+\-*/%])/)
        .map(parte => parte.trim());

       console.log({ texto: inputCalc.value, n1, op, n2 }); // para investigar

       if (!n1 || !op || !n2) throw new Error("Expressão incompleta");

       resultCalc.textContent = operation(Number(n1), op, Number(n2));
     } catch (erro) {
       resultCalc.textContent = erro.message;
     }
   }
// Um "ouvinte" de clique para cada botão
buttons.forEach(botao => {
  botao.addEventListener("click", () => {
    const valor = botao.textContent.trim();

    if (valor === "=") {
      calcular();
    } else if (valor === "C") {
      inputCalc.value = "";
      resultCalc.textContent = "";
    } else if (valor === "back") {
      inputCalc.value = inputCalc.value.slice(0, -1);
      resultCalc.textContent = ""
    } else{
      inputCalc.value += valor; // junta o número ou operador ao que já está no campo
    }
  });
});
