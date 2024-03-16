Array.prototype.myMap = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this));
  }
  return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = numbers.myMap((num) => num + 1);
console.log(sum);
