console.log("Hello world!");

type myObj = {
  [key: string]: any[];
};

let obj: myObj = {};
obj.a = []; // Initialize the array
obj.a.push({ key: "value" });

console.log("obj : ", obj);

obj.a.push({ key: "value" });
