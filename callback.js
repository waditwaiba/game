let source = {
  value: 10,
  cbs: [],
  listen: function (cb) {
    source.cbs.push(cb);
  },
  emit: function () {
    for (let element of this.cbs) {
      element(this.value);
    }
  },
};

source.listen((arg) => {
  console.log("hello", arg);
});
source.listen((arg) => {
  console.log("hello", arg);
});

// ////////////////
Array.prototype.myEvery = function (func) {
  let value = false;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      value = true;
    } else {
      return value;
    }
  }
  return value;
};

let array = [1, 0, 2, 41, 5];

let a = array.myEvery((arg) => arg < 50);
console.log(a);
// ///////////////
let some = array.some((arg) => arg > 50);
console.log(some);

Array.prototype.mySome = function (func) {
  let value = false;
  for (let i = 0; i < this.length; i++) {
    if (func(this[i])) {
      value = true;
    }
  }
  return value;
};
let mysome = array.mySome((arg) => arg < 50);
console.log(mysome);
