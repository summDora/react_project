#### 比较vue和react的生命周期
#### `vue-----beforeCreate------创建vue实例前`
数据还没有挂载呢，只是一个空壳

这data、methods是读不到的,千万不要去修改data里面赋值的数据，最早也要放在created里面去做（添加一些行为）

#### `vue-----created------创建vue实例后`
这个时候已经可以使用到数据，也可以更改数据,在这里更改数据不会触发updated函数

#### `vue-----beforeMount------挂载到dom前------componentWillMount---react（废弃）`
虚拟dom已经创建完成，马上就要渲染,在这里也可以更改数据，不会触发updated

beforeMount的时候，$el还只是我们在HTML里面写的节点，然后到mounted的时候，它就把渲染出来的内容挂载到了DOM节点上。

这中间的过程是执行了render function的内容,相关的 render 函数首次被调用

#### `vue-----mounted------挂载到dom后----------componentDidMount-------react（常用）`
此时，组件已经出现在页面中，数据、真实dom都已经处理好了,事件都已经挂载好了,实例的数据在DOM节点上进行渲染

#### `vue-----beforeUpdate------数据变化更新前------componentWillUpdate----react`
重新渲染之前触发,然后vue的虚拟dom机制会重新构建虚拟dom与上一次的虚拟dom树利用diff算法进行对比之后重新渲染

数据更新时调用，但不进行DOM重新渲染，在数据更新时DOM没渲染前可以在这个生命函数里进行状态处理

#### `vue-----updated------数据变化更新后-----componentDidUpdate----react`
数据已经更改完成，dom也重新render完成

#### `vue-----beforeDestory------vue实例销毁前-----componentWillUnmount----react`
销毁前执行（$destroy方法被调用的时候就会执行）,一般在这里善后:清除计时器、清除非指令绑定的事件等等...

#### `vue-----destoryed------vue实例销毁后-------`
组件的数据绑定、监听...都去掉了,只剩下dom空壳，这里也可以善后

#### vue生命周期在真实场景下的业务应用
created：进行ajax请求异步数据的获取、初始化数据
mounted：挂载元素内dom节点的获取
nextTick：针对单一事件更新数据后立即操作dom
updated：任何数据的更新，如果要做统一的业务逻辑处理
watch：监听具体数据变化，并做相应的处理

#### `constructor----react`
#### `render----react`
#### `componentWillReceiveProps(废弃)----react--------static getDerivedStateFromProps`
组件渲染
getSnapshotBeforeUpdate()
#### `shouldComponentUpdate(nextProps, nextState)-----react`
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候

### 新版本React废弃componentWillMount componentWillReceiveProps  componentWillUpdate
