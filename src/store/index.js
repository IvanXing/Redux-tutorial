import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;


// 创建图书馆 传入reducer接收操作后数据
// store把action转发给reducer reducer操作完 再更新回来