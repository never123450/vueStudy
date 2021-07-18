在某些情况下，我们拿到event的目的可能是进行一些事件处理。
Vue提供了修饰符来帮助我们方便的处理一些事件
- .stop-调用event.stopPropagation()。
- .prevent -调用event.preventDefault()
- .{keyCode | keyAlias} 只当事件是从特定键触发时才触发回调。
- .native -监听组件根元素的原生事件。
- .once -只触发一次回调。I

 <!--停止冒泡-->
<button @click.stop="doThis"></ button>
<!--阻止默认行为-->
<button cclick.prevent="doThis"></button>
<!-- 阻止默认行为，没有表达式-->
<form @submit.prevent></form>
<!--串联修饰符-->
<button @click.stop.prevent="doThis"></button>
<!--键修饰符，键别名-->
<input @keyup.enter="onEnter">
<!--键修饰符，键代码-->
<input @keyup.13="onEnter">
<!--点击回调只会触发一次-->
<button aclick.once="doThis"></ button>

