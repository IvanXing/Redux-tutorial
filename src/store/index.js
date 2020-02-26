import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export default store;


// 创建图书馆 传入reducer接收操作后数据