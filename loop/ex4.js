



// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.

let numero = parseInt(prompt("Digite um numero e veja sua tabuada ate o 10"));

if(!isNaN(numero)) {
    for(let cont = 1; cont <=; cont++) {
        console.log(numero + "X" + cont + "=" + (numero * cont));
    }

}
else{
    console.log("Numero invalido. Por favor, digite um numero valido")
}

console.log(isNan("Hello Word")); //retorna true
console.log(isNan(123));//retorna false