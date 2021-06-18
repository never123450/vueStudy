/*
  Task异步执行
  异步任务的实现过于复杂，我们使用 folktale 中的 Task 来演示
  folktale 一个标准的函数式编程库
    和lodash、ramda 不同的是，他没有提供很多功能函数
    只提供了一些函数式处理的操作，例如: compose、 curry等，一些函子Task、 Either、 MayBe等
*/

const { compose, curry } = require("folktale/core/lambda");
const { toUpper, first } = require("lodash/fp");

// let f = curry(2, (x, y) => {
//   return x + y;
// });

// console.log(f(1, 2));
// console.log(f(1)(2));

let f = compose(toUpper, first);
console.log(f(["one", "two"]));
