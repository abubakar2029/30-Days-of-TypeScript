type JSONValue6 =
  | null
  | boolean
  | number
  | string
  | JSONValue6[]
  | { [key: string]: JSONValue6 };
type Obj = Record<string, JSONValue6> | JSONValue6[];

function isEmpty(obj: Obj): boolean {
  let count: number = 0;
  if (obj) {
    for (const iterator in obj) {
      count++;
      break;
    }
  }
  return count === 0 ? true : false;
}
