Array.prototype.myFilter = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this === this)) {
      result.push(fn(this[i], i, this));
    }
  }
  return result;
};

let getEmpAge = (emp) => emp.age;

let agess = employees.myFilter(getEmpAge);
console.log(agess);
