### Redux
```
    yarn add redux
```

### 1. Redux的工作流程

* 组件中拿到store中初始化数据（store.getState()） 
* 组件中监听数据变化（store.subscribe()）并获取新数据（store.getState()）
* 组件中操作发起action（const action = {type: '', }）并传递给store（store.dispatch(action)）
* store把action转发给reducer
* reducer根据store转发的action操作数据，返回新数据给store，更新组件监听