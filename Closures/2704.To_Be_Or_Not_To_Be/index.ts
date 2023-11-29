type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  const expectValue: number = val;
  return {
    toBe: (val) => {
      const compareValue = val;
      return compareValue === expectValue ? true : (() => { throw new Error("Not Equal"); })();
    },
    notToBe: (val) => {
      const compareValue = val;
      return compareValue !== expectValue ? true : (() => { throw new Error("Equal"); })();
    },
  };
}

 expect(5).toBe(5); // true
 expect(5).notToBe(5); // throws "Equal"
