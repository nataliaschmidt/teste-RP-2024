// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const verifyFibonacci = (n) => {
  let a = 0;
  let b = 1;

  if (n === 0) return console.log(`${n} pertence a sequência de Fibonacci`);

  while (b <= n) {
    if (b === n) return console.log(`${n} pertence a sequência de Fibonacci`);
    let sum = a + b;
    a = b;
    b = sum;
  }
  console.log(`${n} não pertence a sequência de Fibonacci`);
};

// verifyFibonacci(0);
// verifyFibonacci(1);
// verifyFibonacci(4);
// verifyFibonacci(5);
// verifyFibonacci(7);