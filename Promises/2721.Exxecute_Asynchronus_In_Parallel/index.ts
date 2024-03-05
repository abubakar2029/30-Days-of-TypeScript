type Fn99<T> = () => Promise<T>;

let wait = () => {};
function promiseAll<T>(functions: Fn99<T>[]): Promise<T[]> {
  return new Promise(async (res, rej) => {
    let results: T[] = [];
    let r;
    for (let i = 0; i < functions.length; i++) {
      r = await functions[i]()
        .then((r) => {
          results.push(r);
          if (i === functions.length - 1) res(results);
        })
        .catch((e) => {
          rej(e);
        });
    }
  });
}

// By Using Promise.All
// type Fn<T> = () => Promise<T>;

// function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
//     const promises = functions.map(func => func()); // Invoke functions to get promises
//     return Promise.all(promises);
// }

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
