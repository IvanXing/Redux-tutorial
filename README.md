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

### 6. Redux Thunk（异步逻辑放到action中）

* yarn add redux-thunk
* 创建store时，引入redux-thunk，这是Redux的中间件（action和store的中间）
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
// Note: this API requires redux@>=3.1.0
const store = createStore(rootReducer, applyMiddleware(thunk));
```
* 引入redux-thunk就可以把异步操作调用接口的操作从组件中移到action中
* 使用redux-thunk后，action的返回值可以是一个函数了，之前返回的是type和data的对象
```
 componentDidMount() {
    // redux-thunk使action返回函数，而非对象
    const action = getTodoList()  
    // action会执行,此步只是触发actionCreators中的函数
    // 之后action（这是一个对象）再dispatch出去
}
```
* 引入thunk是防止异步函数多导致生命周期代码越来越臃肿难以维护，且有利于自动化测试

### 7. Redux saga（异步逻辑放到action中）
