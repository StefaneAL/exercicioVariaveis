//9 - Crie uma variavel que retorna a palavra (impar/par) de acordo com seu parâmetro.
let entrada = 2;
let resto = entrada % 2;

if (resto === 0 ){
    console.log(`${entrada} é par`);
}else if (resto === 1) {
    console.log(`${entrada} é impar`);
}
console.log(`resto ${resto}`);