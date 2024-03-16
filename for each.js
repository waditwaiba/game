Array.prototype.myForEach = function (func) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i], i, this));
  }

  return result;
};

let num = 0;
let array = [22, 33, 44, 55, 66, 77];
array.forEach(myFunction);

function myFunction(item) {
  num += item;
}
console.log(num);
