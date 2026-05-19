let numeros = [];
let semDuplicados = [];
let existe = false;
let posicao = 0;



for(let i = 0; i < 10; i++) {

    numeros[i] = Number(prompt("Digite um número:"));

}

for(let i = 0; i < 10; i++) {

    existe = false;

    for(let j = 0; j < posicao; j++) {

        if(numeros[i] == semDuplicados[j]) {

            existe = true;

        }

    }

    if(existe == false) {

        semDuplicados[posicao] = numeros[i];

        posicao++;

    }

}

alert("Vetor original: " + numeros);
alert("Vetor sem duplicados: "  + semDuplicados);