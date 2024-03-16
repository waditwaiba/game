Array.prototype.myEvery = function (func) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      result = true;
    } else {
      return false;
    }
  }
  return true;
};

const age = [4, 12, 14, 6];
let lessAge = age.myEvery(myFunction);

function myFunction(value) {
  return value < 18;
}
console.log(lessAge);
