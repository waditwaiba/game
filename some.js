Array.prototype.mySome = function (cb) {
  let result = true;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return true;
    }
  }
  return false;
};

let marks = [18, 10, 12, 15, 20];
let res = marks.mySome(check);
function check(mark) {
  return mark > 24;
}
console.log(res);
