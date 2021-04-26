const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: '<算法导论>',
                data: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '<UNIX 编程艺术>',
                data: '2006-1',
                price: 99.00,
                count: 1
            },
            {
                id: 3,
                name: '<编程珠玑>',
                data: '2008-9',
                price: 22.00,
                count: 1
            },
            {
                id: 4,
                name: '<深入理解 JVM 虚拟机>',
                data: '2006-9',
                price: 98.00,
                count: 1
            }
        ]
    },
    methods: {
        getFinalPrice(price) {
            return '￥' + price.toFixed(2);
        },
        increment(index) {
            this.books[index].count++;
        },
        decrement(index) {
            this.books[index].count--;
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            // for (let item of this.books) {
            //     totalPrice += item.price * item.count;
            // }
            // return totalPrice;

            return this.books.reduce(function (pre, book) {
                return pre + book.price * book.count;
            }, 0);


        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }

})




// 需求:1.取出所有小于 100 的数字;2.将所有<100 的数字进行转化,全部*2到newNums;3.将所有的newNums数字相加,得到最终结果
const nums = [10, 20, 111, 222, 444, 40, 50];

// let newNums = [];
// for(let n of nums){
//     if(n<100){
//         newNums.push(n);
//     }
// }

// let new2Nums = [];
// for(let n of newNums){
//     new2Nums.push(n*2);
// }

// let total = 0;
// for(let n of new2Nums){
//     total += n;
// }
// console.log(total);

// -----------------------使用高阶函数分步完成------------------------


// filter 中的回调函数有一个要求,必须返回 boolean 值,为 true 时,函数内部会自动将这次回调的 n 加入到新数组中
// 为 false 时,函数内部会过滤掉这次的n

// let newNums = nums.filter(function (n) {
//     return n < 100;
// });

// // map 函数
// let newNums2 = newNums.map(function (n) {
//     return n * 2;
// });

// console.log(newNums2);

// // reduce 函数,对数组中所有的内容汇总
// let total = newNums2.reduce(function(preValue,n){
//     return preValue + n;
// },0);

// console.log(total);


// -----------------------使用高阶函数一步完成------------------------

// let total = nums.filter(function (n) {
//     return n < 100;
// }).map(function (n) {
//     return n * 2;
// }).reduce(function (preValue, n) {
//     return preValue + n;
// }, 0);
// console.log(total);

// -----------------------使用箭头函数一步完成------------------------

// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n);
// console.log(total);


