type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}
