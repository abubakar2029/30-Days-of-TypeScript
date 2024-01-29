type Fn2 = (...params: number[]) => number;
function memoize(fn: Fn2): Fn2 {
  return function (...args) {
    console.log("ya args ma aya : ", args);
    let response = fn(...args);
    console.log("Remote functon ka respone : ", response);

    return 2;
  };
}

console.log("In the file");

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3);
/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
