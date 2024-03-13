const source = {
  value: 10,
  arr: [],
  listen: function (cb) {
    this.arr.push(cb);
  },
  emit: function () {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i](this.value);
    }
  },
};

source.listen((value) => {
  console.log("hloo " + value);
});

source.listen((value) => {
  console.log("hi " + value);
});

source.listen((value) => {
  console.log("hey " + value);
});
source.emit();
