type Fn6 = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn6, t: number): Fn6 {
  return async function (...args) {
    return new Promise((res, rej) => {
      const timerId = setTimeout(() => {
        rej("Time Limit Exceeded");
        clearTimeout(timerId);
      }, t);
      fn(...args)
        .then((r) => {
          res(r);
          clearTimeout(timerId);
        })
        .catch((error) => {
          clearTimeout(timerId);
          rej(error);
        });
    });
  };
}
console.log("Working directory");

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(10).catch(); // "Time Limit Exceeded" at t=100ms

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
