
# v-bind
■ 前面我们学习的指令主要作用是将值插入到我们模板的内容当中。
■ 但是，除了内容需要动态来决定外,某些属性我们也希望动态来绑定。
  比如动态绑定 a 元素的 href 属性
  比如动态绑定 img 元素的 src 属性
■这个时候,我们可以使用 v-bind 指令:
  作用:动态绑定属性
  缩写: :
  预期: any (with argument) | Object (without argument)
  参数: attrOrProp (optional)
