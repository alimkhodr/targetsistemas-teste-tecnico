const fs = require('fs');

const faturamento = JSON.parse(fs.readFileSync('data/faturamento_estados.json', 'utf-8'));

const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

const percentuais = Object.entries(faturamento).map(([estado, valor]) => {
  const percentual = ((valor / totalFaturamento) * 100).toFixed(2);
  return { estado, percentual: `${percentual}%` };
});

console.log("Percentual de representação por estado:");
percentuais.forEach(({ estado, percentual }) => {
  console.log(`${estado}: ${percentual}`);
});
