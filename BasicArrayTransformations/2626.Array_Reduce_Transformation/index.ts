type Fn1 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn1, init: number): number {
  if (nums.length === 0) {
    return init;
  }
  let val: number = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
    console.log(
      "Iteration number",
      i,
      "value is ",
      val,
      "And array element is",
      nums[i]
    );
  }
  return val;
}

// const nums = [1, 2, 3, 4];
// let fn = function sum(accum, curr) {
//   return accum + curr;
// };
// const init = 0;

// 2nd failed test case
const nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) {
  return accum + curr * curr;
};
let init=100;
console.log(reduce(nums, fn, init));
