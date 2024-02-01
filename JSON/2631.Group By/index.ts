export {};
declare global {
interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}
}
type myObj1 = {
  [key: string]: any[];
};

Array.prototype.groupBy = function (fn) {
  let obj: myObj1 = {};
  for (const item of this) {
    let key = fn(item);
    if (key in obj) {
      obj[key].push(item);
    } else {
      obj[key] = [];
      obj[key].push(item);
    }
  }
  console.log("obj", obj);

  return obj;
};

[1, 2, 3].groupBy(String); // {"1":[1],"2":[2],"3":[3]}
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
