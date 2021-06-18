/*
  Task 异步执行
    folktale(2.3.2)2.x 中的 task 和 1.0 中的 task 区别很大,1.0 中的方法接近我们现在演示的函子
    这里以 2.3.3 来演示
 */

const fs = require("fs");
const { task } = require("folktale/concurrency/task");
const { split, find } = require("lodash/fp");

function readFile(filename) {
  return task((resolver) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      resolver.resolve(data);
    });
  });
}

readFile("package.json")
  .map(split("\n"))
  .map(find((x) => x.includes("version")))
  .run()
  .listen({
    onRejected: (err) => {
      console.log(err);
    },
    onResolved: (value) => {
      console.log(value);
    },
  });
