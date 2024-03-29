// Solution 1
// type JSONValue7 =
//   | null
//   | boolean
//   | number
//   | string
//   | JSONValue7[]
//   | { [key: string]: JSONValue7 };
// type Obj7 = Record<string, JSONValue7> | Array<JSONValue7>;

// function chunk(arr: Obj7[], size: number): Obj7[][] {
//   let chunkArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let arr2 = [];
//     for (let j = 1; j <= size; j++) {
//       // j will only be used for iteration
//       arr2.push(arr[i]);
//       i++;
//       if (i === arr.length) {
//         break;
//       }
//     }
//     chunkArr.push(arr2);
//     if (i === arr.length) {
//       break;
//     }
//     i--;
//   }
//   return chunkArr;
// }

// Solution 2
type JSONValue7 =
  | null
  | boolean
  | number
  | string
  | JSONValue7[]
  | { [key: string]: JSONValue7 };
type Obj7 = Record<string, JSONValue7> | Array<JSONValue7>;

function chunk(arr: Obj7[], size: number): Obj7[][] {
  let chunk = [];
  let a2 = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    a2.push(arr[i]);
    j++;

    if (j === size||i===arr.length-1) {
      j = 0;
      chunk.push(a2);
      a2=[]
    }
  }
  return chunk;
}
