//Exercício 7: Cálculo de desconto progressivo

//Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
//pague. Faça um programa para logja, que solicite o valor total da compra ao usuário e assim,
//aplique um desconto de acordo com o valor total da compra. Siga a tabela:
//Valor total da compra até R$ 100,00: sem desconto.
//Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
//Valor total da compra acima de R$ 200,00: desconto de 20%.
//Exiba o valor final da compra com o desconto aplicado.

let valorTotal = parseFloat(prompt("Digite o valor total da compra:"))

let desconto;

//Converte o valor da compra para um numero parseFloat-numero com virgula

if (valorTotal <= 100){
    //sem desconto
    desconto = 0;
    console.log("O valor de desconto foi: " + desconto);
}else if (valorCompra <= 200){
    //desconto 10%
    desconto + 0.2;
    console.log("O valor de desconto foi: " + (desconto*100)+"%")
}

//Exibe o valor final da compra com desconto aplicado
let valorFinal = valorFinal - (valorTotal*desconto);

console.log("o valor final da compra com desconto é: R$" + valorFinal.toFixed(2));
