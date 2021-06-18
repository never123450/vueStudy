/*
  lodash/fp
  lodash 的 fp 模块提供了实用的对函数式编程友好的方法
  提供了不可变 auto-curried iteratee-first data-last 方法

  NEVER SAY DIE ---> never say die
*/
const fp = require("lodash/fp");

const f = fp.flowRight(fp.join("-"), fp.map(fp.toLower), fp.split(" "));

console.log(f("NEVER SAY DIE"));

/*
  lodash 和 lodash/fp 模块中 map 方法的区别
*/

const _ = require("lodash");

console.log(_.map(["23", "8", "10"], parseInt)); // [ 23, NaN, 2 ]

console.log(fp.map(parseInt, ["23", "8", "10"])); // [ 23, NaN, 2 ]

/**
    Point Free
    Point Free:我们可以把数据处理的过程定义成与数据无关的合成运算，不需要用到代表数据的那个参数，只要把简单的
    运算步骤合成到一起，在使用这种模式之前我们需要定义一些辅助的基本运算函数。
    不需要指明处理的数据
    只需要合成运算过程
    需要定义一些辅助的基本运算函数
 */
