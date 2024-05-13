


//Exercício 4: Notas escolares
//Faça um programa que receba 4 notas de um aluno, 
//calcule e imprima a média aritmética das notas
//e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO 
//para notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


//Faça um programa que receba 4 notas de um aluno, 
alert("Informe ás notas de 0 á 10")
let nota1 = parseFloat(prompt("Digite uma nota: "));
let nota2 = parseFloat (prompt ("Digite outra nota: "));
let nota3 = parseFloat(prompt ("Digite outra nota: "));
let nota4 = parseFloat(prompt("Digite outra nota: "));


//calcule e imprima a média aritmética das notas
let media= (nota1+nota2+nota3+nota4) /4
//toFixed(num) -> formatar o resultado de quantas casas decimais eu quero que apareçam 
console.log ("A média do aluno é:" + media.toFixed(2))

if(media >= 7) {
    console.log("Recuperação")
}

else if (media > 4 && media < 7) {
    console.log ("Recuperação")
}

else if (media > 5) {
    console.log ("Reprovado")
}




