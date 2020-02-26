### Redux
```
    yarn add redux
```

### 1. Store的创建

```
/*
*   store相当于图书馆馆长 只需要 知道目前图书馆还剩多少资料
*/
import { createStore } from 'redux';
import reducer from './reducer';
const store = createStore(reducer);
export default store;
/*
*   reducer 相当于图书馆管理员 记录数目，操作，新的数目，汇报给馆长
*/
const defaultState = {
   // 初始数据
}
export default (state = defaultState, action) => {
    return state;
}
// 在组件中获取数据
    constructor(props){
        super(props);
        this.state = store.getState(); // 从store中拿数据
        console.log(this.state);
    }
```