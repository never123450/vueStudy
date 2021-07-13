// -------------------------------------------
// for (var i = 0; i < 3; i++) {
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//     console.log("内层循环结束 i=" + i);
//   }
// }
/*
0
内层循环结束 i=0
1
内层循环结束 i=1
2
*/

// -------------------------------------------
// for (var i = 0; i < 3; i++) {
//   for (let i = 0; i < 3; i++) {
//     console.log(i);
//     console.log("内层循环结束 i=" + i);
//   }
// }
/*
循环三次上面的结果
*/

// -------------------------------------------
// var elements = [{}, {}, {}];
// for (var i = 0; i < 3; i++) {
//   elements[i].onClick = function () {
//     console.log(i);
//   };
// }

// elements[2].onClick(); // 不管 i 是多少,都打印 3

// -------------------------------------------
// 使用闭包
// var elements = [{}, {}, {}];
// for (var i = 0; i < 3; i++) {
//   elements[i].onClick = (function (i) {
//     return function () {
//       console.log(i);
//     };
//   })(i);
// }
// elements[2].onClick();

// -------------------------------------------
// 换成 let
var elements = [{}, {}, {}];
for (let i = 0; i < elements.length; i++) {
  elements[i].onClick = function () {
    console.log(i);
  };
}
elements[2].onClick();
