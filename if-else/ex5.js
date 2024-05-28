//Exercício 5: Verificação de números em ordem crescente
//Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
//crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
//não.

let num1 = parseInt(prompt("digite o primeiro numero: "));
let num2 = parseInt(prompt("digite o primeiro numero: "));
let num3 = parseInt(prompt("digite o primeiro numero: "));

if (num1 > num2 && num2 > num3) {
    console.log ("Está em ordem crescente")
}

else {
    console.log ("Não está em ordem crescente")
}

//Desafio
//Informe se os números informado estão em 
// ordem crescente / decrescente / não ordenado