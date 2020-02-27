### Redux
* yarn add redux
* store是唯一的存储空间
* 只有store能够改变自己的内容
    * reducer拷贝state，操作拷贝数据，返回给store，store自己更新
* Reducer必须是纯函数 
    * 纯函数：给定固定的输入，就一定有固定的输出，且不会有副作用
    * 如：return new Date();  时间不定返回的数据不定，不是纯函数

### 1. Redux的工作流程

* 创建一个sotre（const store = createStore(reducer)）
* 组件中拿到store中初始化数据（store.getState()） 
* 组件中监听数据变化（store.subscribe()）并获取新数据（store.getState()）
* 组件中操作发起action（const action = {type: '', }）并传递给store（store.dispatch(action)）
* store把action转发给reducer
* reducer根据store转发的action操作数据，返回新数据给store，更新组件监听

### 2. actionTypes的引入

* action.type是一个字符串，某处写错并不报错，作为常量定义在actionTypes中写错会报错，方便调试

### 3. actionCreator统一创建action

* 提高代码的可维护性
* 方便自动化测试测试

### 4. UI组件与容器组件的拆分

* UI组件(傻瓜组件)负责页面的渲染，容器组件(聪明组件)负责页面的逻辑
* UI组件回传index给容器组件
```
 renderItem={(item, index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
```
* TodoList.js(容器组件)，TodoListUI.js(UI组件)

### 5. 无状态组件

* TodoListUI是一个UI组件，且只有一个render函数，此时，可以用一个函数定义无状态组件
* 当组件中功能只是渲染(render)，就可写成无状态组件(函数)
* 无状态组件为函数，普通组件为class，类需要执行生命周期等，性能不如函数组件

