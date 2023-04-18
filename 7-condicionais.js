console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado por maior de idade")
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Comprador menor de idade, não é possível realizar a compra");

// }

if ( idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem !");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador menor de idade, não é possível realizar a compra");
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem");
} else {
    console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);