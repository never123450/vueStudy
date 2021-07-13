/* 函数的组合要满足结合律(associativity)
 我们既可以把 g 和 h 组合,还可以把 f 和 g 组合,结果都是一样的

 leg f = compose(f,g,h)
 let assocoative = compose(compose(f,g),h) == compose(f,compose(g,h))
 true
 */

// 函数组合要满足结合律
const _ = require("lodash");

// const f = _.flowRight(_.toUpper, _.first, _.reverse);
// const f = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse);
const f = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse));

console.log(f(["one", "two", "three"]));
