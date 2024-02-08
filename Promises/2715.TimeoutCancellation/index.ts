type JSONValue1 =
  | null
  | boolean
  | number
  | string
  | JSONValue1[]
  | { [key: string]: JSONValue1 };
type Fn3 = (...args: JSONValue1[]) => void;

function cancellable(fn: Fn3, args: JSONValue1[], t: number): Function {
  const timerid = setTimeout(() => fn(...args), t);
  return () => {
    clearTimeout(timerid);
  };
}
console.log("Challing");

const result: any = [];
const fn1 = (...x: JSONValue1[]) => {
  let val: JSONValue1 = null;
  x.forEach((item) => {
    if (typeof item === "number") {
      val = item * 5;
    }
  });
  return val;
};
const args = [2],
  t = 20,
  cancelTimeMs = 50;
const start = performance.now();

const log = (...argsArr: JSONValue1[]) => {
  console.log("argsArr", ...argsArr);

  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn1(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelTimeMs);

setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
