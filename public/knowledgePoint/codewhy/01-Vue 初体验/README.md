# 简单认识 Vuejs
Vue是一个渐进式的框架,什么是渐进式的呢?
渐进式意味着你可以将Vue作为你应用的一部分嵌入其中,带来更丰富的交互体验。
或者如果你希望将更多的业务逻辑使用Vue实现,那么Vue的核心库以及其生态系统。
比如Core+Vue-router+Vuex ,也可以满足你各种各样的需求。

Vue有很多特点和Web开发中常见的高级功能
解耦视图和数据
可复用的组件
前端路由技术
状态管理
虚拟DOM
■这些特点,你不需要一个个去记住 ,我们在后面的学习和开发中都会慢慢体会到的,-些技术点我也会在后面进行讲解。
■学习Vuejs的前提?
从零学习Vue开发,并不需要你具备其他类似于Angular. React ,甚至是jQuery的经验。
但是你需要具备一定的HTML、 CSS、 JavaScript基础。

# Vue 中的 MVVM

■ 计数器的 MVVM
我们的计数器中就有严格的 MVVM 思想
➢ View 依然是我们的 DOM
➢ Model 就是我们我们抽离出来的 obj
➢ ViewModel 就是我们创建的 Vue 对象实例
它们之间如何工作呢?
➢ 首先 ViewModel 通过 Data Binding让obj 中的数据实时的在DOM中显示。
➢ 其次 ViewModel 通过 DOM Listener 来监听 DOM 事件,并且通过 methods 中的操作,来改变 obj 中的数据。
■ 有了 Vue 帮助我们完成 VueModel 层的任务,在后续的开发,我们就可以专注于数据的处理,以及 DOM 的编写工作了。

# 创建Vue实例传入的options

■ 你会发现,我们在创建 Vue 实例的时候,传入了一个对象 options。
■ 这个 options 中可以包含哪些选项呢?
口详细解析: https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE
■ 目前掌握这些选项:
el:
  类型: string | HTMLElement
  作用:决定之后Vue实例会管理哪一一个DOM。
data:
  类型: Object| Function
  作用: Vue实例对应的数据对象。
methods:
  类型: { [key: string]: Function }
  作用:定义属于Vue的一-些方法,可以在其他地方调用,也可以在指令中使用。

开发中什么时候称之为方法,什么时候称之为函数
方法: method
函数: function

# Vue 生命周期

事物从诞生到消亡的整个过程
Vue 生命周期:

自定义模板:
  code->首选项->用户片段->填写名称比如 vue,

  "vue-template":{
		"prefix": "vue",
		"body": [
			"<div id='app'>",
			"	<h2>{{message}}</h2>",
			"</div>",
			"<script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>",
			"<script>",
			"const app = new Vue({",
			"	el:'#app',",
			"	data:{",
			"		message : '你好,vue'",
			"	}",
			"})",
			"</script>"]
	}
以后输入 vue 就会自动生成代码片段

