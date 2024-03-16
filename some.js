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
const marks = [30, 40, 18, 20];

marks.some(checkAdult);
function checkAdult(age) {
  return age > 18;
}
console.log(ages);
