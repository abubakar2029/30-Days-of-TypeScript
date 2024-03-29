function createCounter(n: number): () => number {
  let counter: number;

  // 0 is falsy
  return () => {
    counter === undefined ? (counter = n) : counter++;
    return counter;
  };
}

const counter = createCounter(-2);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
