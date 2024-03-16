Array.prototype.myEvery = function (fn) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result = true;
    } else {
      return (result = false);
    }
  }
  return result;
};

const numbers = [45, 9, 4, 16, 25];
let allOver18 = numbers.myEvery(myFunction);

function myFunction(value) {
  return value > 10;
}
console.log(allOver18);
