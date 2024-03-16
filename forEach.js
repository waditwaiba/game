Array.prototype.myforEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i]);
  }
};
let newArr = [];
let numsArray = [25, 46, 82, 16];
numsArray.forEach(myFn);
console.log(newArr);

function myFn(num) {
  newArr.push(num + 1);
}
