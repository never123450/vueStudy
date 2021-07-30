前端模块化
■前端模块化:
0在前面学习中,我已经用了大量的篇幅解释了为什么前端需要模块化。
0而且我也提到了目前使用前端模块化的一些方案: AMD、CMD、CommonJS、 ES6。
0在ES6之前,我们要想进行模块化开发,就必须借助于其他的工具,让我们可以进行模块化开发。
0并且在通过模块化开发完成了项目后,还需要处理模块间的各种依赖,并且将其进行整合打包。
0而webpack其中-一个核心就是让我们可能进行模块化开发 ,并且会帮助我们处理模块间的依赖关系。
0且不仅仅是JavaScript文件,我们的CSS、图片、json文件等等在webpack中都可以被当做模块来使用(在后续我们会看到)。
0这就是webpack中模块化的概念。


■打包如何理解呢?
0理解了webpack可以帮助我们进行模块化,并且处理模块间的各种复杂关系后,打包的概念就非常好理解了。
0就是将webpack中的各种资源模块进行打包合并成一一个或多个包(Bundle)。
0并且在打包的过程中,还可以对资源进行处理,比如压缩图片,将scss转成css ,将ES6语法转成
ES5语法,将TypeScript转成JavaScript等等操作。
0但是打包的操作似乎grunt/gulp也可以帮助我们完成,它们有什么不同呢?

和grunt/gulp的对比
■grunt/gulp的核心是Task
0我们可以配置一系列的task ,并且定义task要处理的事务(例如ES6、ts转化,图片压缩, scss转成css )
0之后让grunt/gulp来依次执行这些task ,而且让整个流程自动化。
0所以grunt/gulp也被称为前端自动化任务管理工具。
■我们来看-一个gulp的task
0下面的task就是将src下面的所有js文件转成ES5的语法。
0并且最终输出到dist文件夹中。
■什么时候用grunt/gulp呢?
0如果你的工程模块依赖非常简单,甚至是没有用到模块化的概念。
0只需要进行简单的合并、压缩,就使用grunt/gulp即可。
0但是如果整个项目使用了模块化管理,而且相互依赖非常强,我们就可以使用更加强大的webpack了。
1所以, grunt/gulp和webpack有什么不同呢?
0 grunt/gulp更加强调的是前端流程的自动化,模块化不是它的核心。
0 webpack更加强调模块化开发管理,而文件压缩合并、预处理等功能,是他附带的功能。

webpack模块化打包
webpack为了可以正常运行，
必须依赖node环境
node环境为了可以正常的执行很多代码，必须其中包含各种依赖的包
npm工具(node packages manager)

webpack安装
■安装webpack首先需要安装Node.js , Node.js自带了软件包管理工具npm
■查看自己的node版本:
node -V
■全局安装webpack(这里我先指定版本号3.6.0 ,因为vue cli2依赖该版本)
npm install webpack@3.6.0 -9 
■局部安装webpack (后续才需要)
O--save-dev是开发时依赖,项目打包后不需要继续使用的。
cd对应目录
npm install webpack@3.6.0 -- save -dev
■为什么全局安装后,还需要局部安装呢?
0在终端直接执行webpack命令,使用的全局安装的webpack
0当在package.json中定义了scripts时,其中包含了webpack命令,那么使用的是局部webpack
node_modeals/.bin/webpack

package.json中定义启动
■但是,每次执行都敲这么一长串有没有觉得不方便呢?
OK ,我们可以在package.json的scripts中定义自己的执行脚本。
■package.json中的scripts的脚本在执行时,会按照一定的顺序寻找命令对应的位置。
口首先,会寻找本地的node_ _modules/.bin路径中对应的命令。
0如果没有找到,会去全局的环境变量中寻找。
口如何执行我们的build指令呢?
npm run build

什么是loader ?
■loader是webpack中一个非常核心的概念。
■webpack用来做什么呢?
0在我们之前的实例中,我们主要是用webpack来处理我们写的js代码,并且webpack会自动处理js之间相关的
依赖。
口但是,在开发中我们不仅仅有基本的js代码处理,我们也需要加载csS、图片,也包括一些高级的将ES6转成
ES5代码,将TypeScript转成ES5代码,将sCSS、less转成css ,将jsx、.vue文件转成js文件等等。
0对于webpack本身的能力来说,对于这些转化是不支持的。
0那怎么办呢?给webpack扩展对应的loader就可以啦。
■loader使用过程: .
口步骤一:通过npm安装需要使用的loader
口步骤二:在webpack.config.js中的modules关键字下进行配置
■大部分loader我们都可以在webpack的官网中找到,并且学习对应的用法。

css 文件处理
■我们来安装style-loader
npm install --save-dev style- Loader
■注意: style-loader需要放在css-loader的前面。
■疑惑:不对吧?按照我们的逻辑,在处理css文件过程中,应该是css-loader先加载css文件,再由style-loader
来进行进一步的处理 ,为什么会将style-loader放在前面呢?
■答案:这次因为webpack在读取使用的loader的过程中,是按照从右向左的顺序读取的。
■目前, webpack.config.js的配置如下:

安装 vue 的三种方式:
1.直接下载
2.引用 cdn
3.npm


el和template区别(一)
■正常运行之后,我们来考虑另外-一个问题:
0如果我们希望将data中的数据显示在界面中,就必须是修改index.html
0如果我们后面自定义了组件,也必须修改index.html来使用组件
0但是html模板在之后的开发中,我并不希望手动的来频繁修改,是否可以做到呢?
■定义template属性:
0在前面的Vue实例中,我们定义了el属性,用于和index.htmI中的#app进行绑定,让Vue实例之后可以管理它其中的内容
0这里,我们可以将div元素中的{{message}}内容删掉,只保留一个基本的id为div的元素
0但是如果我依然希望在其中显示{message}}的内容,应该怎么处理呢?
0我们可以再定义一个template属性,代码如下:
new Vue({
  el: ' #app
  template: '<div id=" app">{{message}}</div>',
  data: {
    message: 'code why'
  }
})  