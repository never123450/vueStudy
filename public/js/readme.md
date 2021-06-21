JavaScript 采用单线程模式工作的原因

异步模式
不会等待这个任务执行结束才开始下一个任务
开启过后就立即往后执行下一个任务
后续逻辑一般会通过回调函数的方式定义
单线程的 JavaScript 语言就无法同时处理大量耗时任务
代码执行混乱

回调函数
所有异步编程方案的根基
回调函数可以理解为你想要做的事情

Promise
一种更优的异步编程统一方案
嵌套使用的方式是使用 promise 最常见的误区
借助于 Promise then 方法链式调用的特点尽可能保证异步任务的扁平化

Promise 链式调用
Promise 对象的 then 方法会返回一个全新的 Promise 对象
后面的 then 方法就是在为上一个 then 返回的 Promise 注册回调
前面 then 方法中的回调函数的返回值会作为后面 then 方法回调的参数
如果回调中返回的是 Promise ,那后面的 then 方法的回调会等待它的结束

在代码中明确捕获每一个可能的异常

Promise 的静态方法
Promise 并行执行
Promise.all([
  ajax('')
  ajax('')
])

Promise 执行时序/宏任务vs微任务

Generator 异步方案

语言和平台之间的关系

通常看作JavaScript的标准化规范
实际上 JavaScript 是 ECMAScript 的扩展语言
ECMAScript 只提供了最基本的语法
JavaScript 语言本身指的就是 ECMAScript
2015 年开始 ES 保持每年一个版本的迭代

ES2015 开始按年份命名
很多人把 ES2015 称之为 ES6

const

数组的解构

11.Es2015 参数默认值


