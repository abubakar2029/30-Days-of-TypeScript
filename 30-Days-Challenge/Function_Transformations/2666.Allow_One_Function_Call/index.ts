type JSONValue8 =
  | null
  | boolean
  | number
  | string
  | JSONValue8[]
  | { [key: string]: JSONValue8 };
type OnceFn = (...args: JSONValue8[]) => JSONValue8 | undefined;

function once(fn: Function): OnceFn {
  let count: number = 0;
  return function (...args) {
    if (count !== 0) {
      return undefined;
    } else {
      count++;
      return fn(...args);
    }
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
