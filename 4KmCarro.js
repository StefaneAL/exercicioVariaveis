//4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
//assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar,
//sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.
let kmPercorrido = 1200 ;
let diasAlugados = 5 ;
let totalDiaria = diasAlugados * 60.00;
let totalKm = kmPercorrido * 0.15;
let totalPagar = totalDiaria + totalKm;

console.log(`O total de diarias é R$ ${totalDiaria} e o totao de Km R$ ${totalKm}. O preço final R$ ${totalPagar} `);