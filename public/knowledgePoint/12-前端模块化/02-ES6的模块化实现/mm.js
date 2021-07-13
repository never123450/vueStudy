// 1.导入的{}中定义的变量
import { from } from "core-js/core/array";
import {flag,sum} from "./aaa.js";
if(flag){
    console.log("小明是天才，1111");
    console.log(sum(29,10));
}

// 2.直接导入export定义的变量
import{num1,height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的function
import {mul,Person} from "./aaa.js";
console.log(mul(1,2));

const p = new Person();
p.run();

import addr from "./aaa.js";
addr("你好啊")

// 统一全部导入
import * as aaa from "./aaa.js"
console.log(aaa.flag);
console.log(aaa.height);