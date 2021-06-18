/*
  函数组合如何调试
  NEVER SAY DIE ---> never say die
*/
const _ = require("lodash");

// _.split()
const split = _.curry((sep, str) => _.split(str, sep));

// _.toLower

const join = _.curry((sep, array) => _.join(array, sep));

// const log = (v) => {
//   console.log(v);
//   return v;
// };

const trace = _.curry((tag, v) => {
  console.log(tag, v);
  return v;
});

const map = _.curry((fn, array) => _.map(array, fn));

// const f = _.flowRight(join("-"), _.toLower, log,  split(' '));
// const f = _.flowRight(join("-"), log, _.toLower, split(' '));
const f = _.flowRight(
  join("-"),
  trace("map 之后"),
  map(_.toLower),
  trace("split 之后"),
  split(" ")
);

console.log(f("NEVER SAY DIE"));
