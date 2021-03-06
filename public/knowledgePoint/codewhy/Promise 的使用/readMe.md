# 什么是Promise呢?

- ES6中一个非常重要和好用的特性就是Promise
  但是初次接触Promise会一脸懵逼 ,这TM是什么东西?
  看看官方或者一些文章对它的介绍和用法,也是一头雾水。
- Promise到底是做什么的呢?
  Promise是异步编程的一种解决方案。
- 那什么时候我们会来处理异步事件呢?
  一种很常见的场景应该就是网络请求了。
  我们封装一个网络请求的函数 ,因为不能立即拿到结果,所以不能像简单的 3+4=7 一样将结果返叵
  所以往往我们会传入另外一个函数,在数据请求成功时,将数据通过传入的函数回调出去。
  如果只是一个简单的网络请求,那么这种方案不会给我们带来很大的麻烦。
- 但是,当网络请求非常复杂时,就会出现回调地狱。
  OK ,我以一个非常夸张的案例来说明。

# 网络请求的回调地狱

- 我们来考虑下面的场景(有夸张的成分) :
  我们需要通过一个url1从服务 器加载一个数据data1 , data1中包含了下一一个请求的url2
  我们需要通过data1取出url2 ,从服务器加载数据data2 , data2中包含了下一个请求的url3
  我们需要通过data2取出url3 ,从服务器加载数据data3 , data3中包含了下一个请求的url4
  发送网络请求 url4,获取最终的数据 data4

$.ajax( 'url1', function (data1) {
  $.ajax(datal['url2'], function (data2) {
    $.ajax(data2['url3'L function (data3) {
      $.ajax(data3['url4'], function (data4) {
        console. log(data4);
      })
    })
  })
})

- 上面的代码有什么问题吗?
  正常情况下,不会有什么问题,可以正常运行并且获取我们想要的结果。
  但是,这样额代码难看而且不容易维护。
  我们更加期望的是一种更加优雅的方式来进行这种异步操作。
- 如何做呢?就是使用 Promise。
  Promise 可以以一种非常优雅的方式来解决这个问题。

# Promise三种状态
- 首先,当我们开发中有异步操作时,就可以给异步操作包装一个 Promise
  异步操作之后会有三种状态
- 我们一起来看一下这三种状态:
  pending :等待状态,比如正在进行网络请求,或者定时器没有到时间。
  fulfill :满足状态,当我们主动回调了resolve时,就处于该状态,并且会回调.then()
  reject :拒绝状态,当我们主动回调了reject时,就处于该状态,并且会回调.catch()

Promise链式调用
- 我们在看Promise的流程图时,发现无论是then还是catch都可以返回一-个Promise对象。
- 所以,我们的代码其实是可以进行链式调用的:
- 这里我们直接通过Promise包装了一-下新的数据,将Promise对象返回了
  Promise.resovle() : 将数据包装成Promise对象,并且在内部回调resolve()函数
  Promise.reject() : 将数据包装成Promise对象,并且在内部回调reject()函数

