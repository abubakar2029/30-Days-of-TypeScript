type JSONValue87 =
  | null
  | boolean
  | number
  | string
  | JSONValue87[]
  | { [key: string]: JSONValue87 };
type ArrayType = { id: number } & Record<string, JSONValue87>;

type Item = Object & {
    [key: string]: string
}
type Result =Object & { [key: string]: JSONValue87 };
function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let result: Record<string,Result> = {};
  //   Joining
  arr1.forEach((item) => {
    result[item.id] = item;
  });
  //   Insertion
  arr2.forEach((item: any) => {
    if (result[item.id]) {
      Object.keys(item).forEach((key: any) => {
        if (key in item) {
          result[item.id][key] = item[key];
        }});
    } else {
        result[item.id] = item;
    }
});
  return Object.values(result) as ArrayType[];
}
