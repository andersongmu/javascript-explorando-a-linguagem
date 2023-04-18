console.log(`Trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item à lista

console.log("Destinos possíveis: ");
// console.log(salvador, saoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // remove um item da lista, (posição inicial, quantidade de elementos)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //exibe o item [] selecionado da lista