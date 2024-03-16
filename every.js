Array.prototype.myEvery = function (fn) {
  let result = false;
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result = true;
    } else {
      return false;
    }
  }
  return true;
};

let ages = [23, 24, 44, 28, 2];
let res = ages.myEvery(check);
function check(age) {
  return age > 18;
}
console.log(res);

let person = [
  {
    name: "azna",
  },
  {
    name: "nazi",
  },
  {
    name: "amana",
  },
  {
    name: "aliya",
  },
];
let result = person.myEvery(func);
function func(per) {
  return per.name;
}
console.log(result);
