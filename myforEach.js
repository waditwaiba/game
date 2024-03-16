Array.prototype.myforEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};
let sum = 1;
const numbers = [1, 2, 3, 4];
numbers.myforEach(myFunction);

function myFunction(item) {
  sum += item;
}
console.log(sum);

let arry = [
  {
    name: "fathima",
    age: 19,
  },
  {
    name: "nazi",
    age: 19,
  },
  {
    name: "azna",
    age: 19,
  },
];
arry.myforEach((arr) => {
  console.log(arr.name);
});
