function nodeFibonacci(n) {
    let a = 0;
    let b = 1;
    while (b < n) {
      [a, b] = [b, a + b];
    }
    return b === n;
  }
  const num = parseInt(prompt("Digite um número: "));
  
  const fib = [0, 1];
  while (fib[fib.length - 1] < num) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  
  if (fib.includes(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}