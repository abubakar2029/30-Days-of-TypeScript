type Fn99<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn99<T>[]): Promise<T[]> {
  return new Promise(async (res, rej) => {
    let results: T[] = [];
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((r) => {
          results[i] = r;
          if (results.filter((_) => _ != null).length === functions.length)
            res(results);
        })
        .catch(rej);
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
