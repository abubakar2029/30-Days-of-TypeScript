type MultiDimensionalArray = (number | MultiDimensionalArray)[];

let flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n <= 0) return arr;
  let flattenArr: MultiDimensionalArray = [];
  function flatOpt(ARR: MultiDimensionalArray, depth: number) {
    for (let i = 0; i < ARR.length; i++) {
      if (Array.isArray(ARR[i]) && depth < n) {
        flatOpt(ARR[i] as MultiDimensionalArray, depth+1);
      } else {
        flattenArr.push(ARR[i]);
      }
    }
  }
  flatOpt(arr, 0);

  return flattenArr;
};
