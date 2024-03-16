Array.prototype.mySome = function (fn) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return (result = true);
    } else {
      result;
    }
  }
  return result;
};

const numbers = [9, 4, 16, 25];
let allOver18 = numbers.mySome(myFunction);

function myFunction(value) {
  return value > 26;
}
console.log(allOver18);
