# const关键字
- 在很多语言中已经存在,比如C/C++中，主要的作用是将某个变量修饰为常量
- 在JavaScript中也是如此,使用const修饰的标识符为常量,不可以再次赋值.什么时候使用const呢?
- 当我们修饰的标识符不会被再次赋值时,就可以使用const来保证数据的安全性.

在开发中，优先使用const，只有需要改变某一个标志符的时候才使用let
- const的注意
const注意一:
const a = 20;
a = 30;//错误:不可以修改.
const注意二:
const name;//错误:const修饰的标识符必须赋值.
注意三：
常量的含义是指向对象不能修改，但是可以改变对象内部的属性
const obj={
    name:'what',
    age:19,
    height:180
}
console.log(obj)

obj.name='kobi'
obj.age=22
obj.height=220


