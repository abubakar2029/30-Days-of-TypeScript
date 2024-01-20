type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x: number): number {
    if (functions.length <= 0) return x;
    let functionReturn: number = x;
    for (let i = functions.length - 1; i >= 0; i--)
      functionReturn = functions[i](functionReturn);
    return functionReturn;
  };
}

const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log("Final Answer", fn(4)); // 9
/**
 */
