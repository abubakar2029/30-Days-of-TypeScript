function createHelloWorld() {
  return function (): string {
    return "Hello World";
  };
}
const f = createHelloWorld();
console.log(f());

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
