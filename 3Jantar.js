//3 - Crie um algoritmo que leia o valor de um jantar, 
//calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

let valorJantar = 375;
const taxa = valorJantar * 0.1;

let total = valorJantar+taxa;

console.log(`O valor da taxa do garçom é R$ ${taxa}, o valor total a pagar é R$ ${total}`);