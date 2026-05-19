let numeros = [];
let soma = 0;

for(let i = 0; i < 10; i++) {

    let numero = Number(prompt("Digite um número intero: "));

    numeros[i] = numero;
}

for(let i = 0; i < 10; i++) {

    if(numeros[i] % 2 == 0) {

        soma = soma + numeros[i];
    }
}
console.log("Vetor:", numeros);
console.log("Soma dos números pares:", soma);