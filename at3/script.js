let numeros = [];
let contador = 0;

for(let i = 0; i < 10; i++) {

    numeros[i] = Number(prompt("Digite um número inteiro:"));

}

let procurar = Number(prompt("Digite o número que deseja procurar:"));

for(let i = 0; i < 10; i++) {

    if(numeros[i] == procurar) {

        contador++;

    }

}

console.log("Vetor:", numeros);
alert(contador);