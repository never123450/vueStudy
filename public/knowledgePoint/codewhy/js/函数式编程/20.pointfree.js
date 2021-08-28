// Hello World => hello_world

const fp = require("lodash/fp");

const f = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);
console.log(f("Hello   World"));

// 把一个字符串中的首字母提取并转换成大写,使用 . 作为分隔符
// world wild web ==> W. W. W

// const firstLetterToUpper = fp.flowRight(
//   fp.join(". "),
//   fp.map(fp.first),
//   fp.map(fp.toUpper),
//   fp.split(" ")
// );

// 上面优化
const firstLetterToUpper = fp.flowRight(
  fp.join(". "),
  fp.map(fp.flowRight(fp.toUpper, fp.first)),
  fp.split(" ")
);

console.log(firstLetterToUpper("world wild web"));

/*
Functor (函子)
为什么要学函子
  到目前为止已经已经学习了函数式编程的一些基础，但是我们还没有演示在函数式编程中如何把副作用控制在可控的范围
  内、异常处理、异步操作等。
什么是Functor
  容器:包含值和值的变形关系(这个变形关系就是函数)
  函子:是一个特殊的容器，通过一个普通的对象来实现，该对象具有map方法，map方法可以运行一个函数对值进行处理(变形关系)
*/
