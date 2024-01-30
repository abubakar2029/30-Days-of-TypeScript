// type Func<T, U> = (arg: T) => U;

// interface Cache<T, U> {
//   [key: string]: U;
// }

// function memoize<T, U>(fn: Func<T, U>): Func<T, U> {
//   const cache: Cache<T, U> = {};

//   return function (...args: T[]): U {
//     const key = JSON.stringify(args);

//     if (key in cache) {
//       return cache[key];
//     }

//     const result = fn.apply(this, args);
//     cache[key] = result;

//     return result;
//   };
// }

// const memoizedSum = memoize(function (a: number, b: number): number {
//   return a + b;
// });

// const memoizedFib = memoize(function (n: number): number {
//   if (n <= 1) {
//     return 1;
//   }

//   return memoizedFib(n - 1) + memoizedFib(n - 2);
// });

// const memoizedFactorial = memoize(function (n: number): number {
//   if (n <= 1) {
//     return 1;
//   }

//   return memoizedFactorial(n - 1) * n;
// });

// console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
// console.log(memoizedSum(2, 3)); // Output: 5

// console.log(memoizedFib(5)); // Output: Computing fib, 8
// console.log(memoizedFib(5)); // Output: 8

// console.log(memoizedFactorial(5));
// console.log(memoizedFactorial(5)); 