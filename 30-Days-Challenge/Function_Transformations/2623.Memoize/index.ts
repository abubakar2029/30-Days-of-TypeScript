type Fn2 = (...params: number[]) => number;
interface CacheInterface {
  [key: string]: number;
}
function memoize(fn: Fn2): Fn2 {
  let cache: CacheInterface = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  console.log("callCount", callCount);

  return a + b;
});
memoizedFn(2, 3);
memoizedFn(2, 2);
memoizedFn();
memoizedFn(1, 2);
memoizedFn();
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

//  [4,4,1,3,2]
