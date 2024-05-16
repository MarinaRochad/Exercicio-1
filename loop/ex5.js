



// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.


let fib = 1;
let fib2 = 1;

console.log("Os primeiros 10 numeros da sequencia de Fibonacci sao: ")
console.log(fib1);
console.log(fib2);

//para calcular e imprimir os proximos numeros da sequencia.

for(let i = 2; i <10; i++){
    let nextFib = fib1 + fib2;
    console.log(nextFib);

    //Atualizar os valores de fib1 e fib2 para os proximos calculos
    fib1 = fib2;
    fib2 = nextFib;

}

