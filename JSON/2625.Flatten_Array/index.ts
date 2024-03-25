type MultiDimensionalArray = (number | MultiDimensionalArray)[];

let flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n == 0) return arr;
  let depth = 0;
  let flattenArr: MultiDimensionalArray = [];
  function flatOpt(ARR: MultiDimensionalArray) {
    for (let i = 0; i < ARR.length; i++) {
      if (Array.isArray(ARR[i]) && depth <= n) {
        depth++;
        flatOpt(ARR[i] as MultiDimensionalArray);
      } else {
        flattenArr.push(ARR[i]);
      }
      depth = 0;
    }
  }
  flatOpt(arr);

  return flattenArr;
};
