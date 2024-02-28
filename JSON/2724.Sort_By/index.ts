type JSONValue9 =
  | null
  | boolean
  | number
  | string
  | JSONValue9[]
  | { [key: string]: JSONValue9 };
type Fn9 = (value: JSONValue9) => number;

function sortBy(arr: JSONValue9[], Fn9: Fn9): JSONValue9[] {
  return arr.sort((a, b) => Fn9(a) - Fn9(b));
}
