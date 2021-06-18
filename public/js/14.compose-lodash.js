// lodash 中的函数组合的方法 _.flowRight()
const _ = require("lodash");

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (s) => s.toUpperCase();

const f = _.flowRight(toUpper, first, reverse);
console.log(f(["one", "two", "three"]));

// 模拟 ladash 中的 flowRight
// function compose(...args) {
//   return function (value) {
//     return args.reverse().reduce(function (acc, fn) {
//       return fn(acc);
//     }, value);
//   };
// }

// 转换成箭头函数
const compose = (...args) => (value) =>
  args.reverse().reduce((acc, fn) => fn(acc), value);

const c = compose(toUpper, first, reverse);
console.log(c(["one", "two", "three"]));
