type JSONValue87 =
  | null
  | boolean
  | number
  | string
  | JSONValue87[]
  | { [key: string]: JSONValue87 };
type ArrayType = { id: number } & Record<string, JSONValue87>;

type Item = Record<string, string>;

// type Result = { [key: string]: JSONValue87 };
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let result: Record<number, ArrayType> = {};
  //   Joining
  arr1.forEach((item: ArrayType) => {
    result[item.id] = item;
  });
  //   Insertion
  arr2.forEach((item: ArrayType) => {
    if (result[item.id]) {
      Object.keys(item).forEach((key: string) => {
        if (key in item) {
          result[item.id][key] = item[key];
        }
      });
    } else {
      result[item.id] = item;
    }
  });
  return Object.values(result);
}
