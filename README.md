### 新版本React不推荐使用componentWillMount
#### 比较vue和react的生命周期
#### `vue-----beforeCreate------创建vue实例前`
数据还没有挂载呢，只是一个空壳

beforeCreate的时候千万不要去修改data里面赋值的数据，最早也要放在created里面去做（添加一些行为）

#### `vue-----created------创建vue实例后`
这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数

#### `vue-----beforeMount------挂载到dom前------componentWillMount---react（废弃）`
虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated
beforeMount的时候，$el还只是我们在HTML里面写的节点，然后到mounted的时候，它就把渲染出来的内容挂载到了DOM节点上。这中间的过程其实是执行了render function的内容。

#### `vue-----mounted------挂载到dom后----------componentDidMount-------react（常用）`
此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了

#### `vue-----beforeUpdate------数据变化更新前------componentWillUpdate----react`
重新渲染之前触发,然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染

#### `vue-----updated------数据变化更新后-----componentDidUpdate----react`
数据已经更改完成，dom也重新render完成

#### `vue-----beforeDestory------vue实例销毁前-----componentWillUnmount----react`
销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...

#### `vue-----destoryed------vue实例销毁后-------`
组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后


#### `componentWillReceiveProps---react`
#### `constructor----react`
#### `render----react`
组件渲染

#### `shouldComponentUpdate(nextProps, nextState)-----react`
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

### 对vue的生命周期的理解
