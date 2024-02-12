type Fn6 = (...params: any[]) => Promise<any>;

function timeLimit(fn6: Fn6, t: number): Fn6 {
  return async function (...args) {
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
