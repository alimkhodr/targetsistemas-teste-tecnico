const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/faturamento.json', 'utf-8'));

const diasComFaturamento = data.filter(dia => dia.faturamento > 0);

const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.faturamento));
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.faturamento));

const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.faturamento, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.faturamento > mediaMensal).length;

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
