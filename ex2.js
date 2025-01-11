function isFibonacci(num) {
    let a = 0, b = 1, temp;
  
    if (num === a || num === b) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
  
    while (b < num) {
      temp = b;
      b = a + b;
      a = temp;
    }
  
    if (b === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    } else {
      return `${num} não pertence à sequência de Fibonacci.`;
    }
  }
  
  const numero = 21;
  console.log(isFibonacci(numero));
  