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

// Found an optimized solution in Solutions
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
// type Obj = Record<string, JSONValue> | Array<JSONValue>;

// const compactObject = (obj: Obj): Obj => {
//     if (Array.isArray(obj)) {
//         const newArray = [];

//         for (const item of obj) {
//             if (item) {
//                 newArray.push(typeof item === 'object' ? compactObject(item) : item);
//             }
//         }

//         return newArray;
//     }

//     for (const [key, value] of Object.entries(obj)) {
//         if (!value) {
//             delete obj[key];

//             continue;
//         }

//         if (typeof value === 'object') {
//             obj[key] = compactObject(value);
//         }
//     }

//     return obj;
// };
