// Promise 基本示例

const promise = new Promise(function (resolve, reject) {
  // 这里用于兑现承诺
  // resolve(100); //承诺达成

  reject(new Error("promise rejected xxx")); // 承诺失败
});

promise.then(
  function (value) {
    console.log("resolved", value);
  },
  function (error) {
    console.log("reject", error);
  }
);
