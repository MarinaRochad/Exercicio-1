//Construir um menu que é possivel escolher um exercicio entre os anteriores, para ser executado
//Faca com que o menu repita a execução
//disponibilize as opcoes para o esuario
//ate que seja digitado sair



//semana
function exercicioSemana() {
    let dia_semana = prompt("Informe um número de 1 a 7: ")

    switch (dia_semana) {
        case "1":
            console.log("Segunda-feira")
            break;

        case "2":
            console.log("Terça-feira")
            break;

        case "3":
            console.log("Quarta-feira")
            break;

        case "4":
            console.log("Quinta-feira")
            break;

        case "5":
            console.log("Sexta-feira")
            break;

        case "6":
            console.log("Sábado")
            break;

        case "7":
            console.log("Domingo")
            break;

        default:
            console.log("O número selecionado nao e válido");
            break
    }
}







//impar ou par
function exercicioImparouPar() {
    alert("Seja bem Vindo!")

    let número = prompt("Coloque um número e descruba se ele é ímpar ou par!")

    if (número % 2 == 0) {
        alert("Par")
    } else {
        alert("Ímpar")
    }
}







//nota

function exercicioNota() {
    alert("Informe ás notas de 0 á 10")
    let nota1 = parseFloat(prompt("Digite uma nota: "));
    let nota2 = parseFloat(prompt("Digite outra nota: "));
    let nota3 = parseFloat(prompt("Digite outra nota: "));
    let nota4 = parseFloat(prompt("Digite outra nota: "));


    //calcule e imprima a média aritmética das notas
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    //toFixed(num) -> formatar o resultado de quantas casas decimais eu quero que apareçam 
    console.log("A média do aluno é:" + media.toFixed(2))

    if (media >= 7) {
        console.log("Recuperação")
    }

    else if (media > 4 && media < 7) {
        console.log("Recuperação")
    }

    else if (media > 5) {
        console.log("Reprovado")
    }

}





//Switch 

//tabuada
function exercicioTabuada() {
    let numero = parseInt(prompt("Digite um numero e veja sua tabuada ate o 10"));

    if (!isNaN(numero)) {
        for (let cont = 1; cont <= cont++){
            console.log(numero + "X" + cont + "=" + (numero * cont));
        }

    }
    else {
        console.log("Numero invalido. Por favor, digite um numero valido")
    }

    console.log(isNan("Hello Word")); //retorna true
    console.log(isNan(123));//retorna false
}




//Fibonacci

function exercicioFibonacci() {
    let fib = 1;
    let fib2 = 1;

    console.log("Os primeiros 10 numeros da sequencia de Fibonacci sao: ")
    console.log(fib1);
    console.log(fib2);

    //para calcular e imprimir os proximos numeros da sequencia.

    for (let i = 2; i < 10; i++) {
        let nextFib = fib1 + fib2;
        console.log(nextFib);

        //Atualizar os valores de fib1 e fib2 para os proximos calculos
        fib1 = fib2;
        fib2 = nextFib;

    }
}



//exercicioSoma

function exercicioSoma() {
    let num = 1;
    let soma = 0;

    while (num <= 100) {
        //soma= soma + num;
        soma += num;
        num++;
    }

    console.log("A soma dos numeros de 1 a 100 e: " + soma)
}

let opcao = window.prompt("MENU\ndigite a opcao desejada:\n\n6 - ExercicioFibonacci")


do {
    
    opcao = window.prompt("MENU\ndigite a opcao desejada:\n\n1 - exercicioSemana\n2 -  exercicioImparouPar\n3 -  exercicioNota\n4 - exercicioTabuada\n5 - exercicioFibonacci\n6 - exercicioSoma" )
    
    console.clear()

    switch (opcao) {
        case "1":
        exercicioSemana()
        break;
    
        case "2":
            exercicioImparouPar()
            break;
    
        case "3":
            exercicioNota()
            break;
    
        case "4":
            exercicioTabuada()
            break;
    
        case "5":
            exercicioFibonacci()
            break;
        
        case "6":
            exercicioSoma()
            break;
    
        default:
            break;
    }
    
    
}while (opcao != "sair")


