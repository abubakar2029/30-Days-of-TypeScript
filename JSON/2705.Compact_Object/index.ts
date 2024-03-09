type myVal =
  | null
  | boolean
  | number
  | string
  | myVal[]
  | { [key: string]: myVal };
type Obj21 = Record<string, myVal> | Array<myVal>;

function compactObject(obj: Obj21): Obj21 {
  function rcr(obj: myVal) {
    if (!obj) return false;
    if (typeof obj !== "object") return obj;
    if (Array.isArray(obj)) {
      let newArr: myVal[] = [];
      for (let i = 0; i < obj.length; i++) {
        let subRes = rcr(obj[i]);
        if (subRes) {
          newArr.push(subRes);
        }
      }
      return newArr;
    } else {
      let newObj: any = {};
      for (const key in obj) {
        let subRes = rcr(obj[key]);
        if (subRes) {
          newObj[key] = subRes;
        }
      }
      return newObj;
    }
  }
  return rcr(obj);
}
const r = compactObject({ a: null, b: [false, 1] });
console.log(r);
