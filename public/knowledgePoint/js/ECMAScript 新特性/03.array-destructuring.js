// 数组的解构

const arr = [100, 200, 300];

// const foo = arr[0];
// const bar = arr[1];
// const baz = arr[2];
// console.log(foo, bar, baz);
// 100 200 300

// const [foo, bar, baz] = arr;
// console.log(foo, bar, baz);
// 100 200 300

// const [, , baz] = arr;
// console.log(baz);
// 300

// const [foo, ...rest] = arr;
// console.log(rest);
// [ 200, 300 ]

// const [foo, bar, baz, more] = arr;
// console.log(more);
// undefined

const [foo, bar = 123, baz, more = "default value"] = arr;
console.log(more);
// undefined
