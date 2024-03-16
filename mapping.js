const source = {
  value: 10,
  cbs: [],
  listen: function (cb) {
    this.cbs.push(cb);
  },
  emit: function () {
    for (let i of this.cbs) {
      i(this.value);
    }
  },
};

source.listen((source) => {
  console.log("hello" + source);
});

source.listen((source) => {
  console.log("hi" + source);
});
source.listen((source) => {
  console.log("hello,hi" + source);
});

source.emit();
