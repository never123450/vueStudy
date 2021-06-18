/*
    Pointed 函子
    Pointed 函子是实现了 of 静态方法的函子
    of 方法是为了避免使用 new 来创建对象,更深层的含义是 of方法用来把值放到上下文 
    Context(把值放到函数中使用 map 来处理值)
  */

/*
  Monad (单子)
  在使用 IO 函子的时候,如果我们写出如下代码
*/

/* IO 函子的问题 */
const fs = require("fs");
const fp = require("lodash/fp");

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    });
  }

  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}

let readFile = function (filename) {
  return new IO(function () {
    return fs.readFileSync(filename, "utf-8");
  });
};

let print = function (x) {
  return new IO(function () {
    console.log(x);
    return x;
  });
};

let cat = fp.flowRight(print, readFile);

let r = cat("package.json")._value()._value();
console.log(r);

/*
  Monad 函子是可以变扁的 Pointed 函子 IO(IO(x))
  一个函子如果具有 join 和 of 两个方法并遵守一些定律就是一个 Monad
*/
