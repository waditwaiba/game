const soruce = {
  value: 10,
  cbs: [],
  listen: function (cb) {
    this.cbs.push(cb);
  },
  emit: function () {
    for (let i = 0; i < this.cbs.length; i++) {
      this.cbs[i](this.value);
    }
  },
};
soruce.listen((val) => {
  console.log("hai " + val);
});

soruce.listen((val) => {
  console.log("hello " + val);
});
soruce.listen((val) => {
  console.log("hloo " + val);
});
soruce.emit();
