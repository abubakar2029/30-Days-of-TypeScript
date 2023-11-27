function createCounter(n: number): () => number {
  let counter: number = 0;
  return () => {
    counter === 0 ? (counter = n) : counter++;
    return counter;
  };
}
let counter = createCounter(-2);

console.log(counter());
console.log(counter());
console.log(counter());
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
