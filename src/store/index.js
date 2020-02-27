import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas'; // saga管理异步文件

// saga引入配置
const sagaMiddleware = createSagaMiddleware()

// redux-devtools-extension 插件引入配置
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    // 使用thunk
    // applyMiddleware(thunk),
    // 使用saga
    applyMiddleware(sagaMiddleware),
);    

const store = createStore(
    reducer,
    //applyMiddleware(thunk)  引入插件，thunk配置在上面
    enhancer
);

sagaMiddleware.run(todoSagas)  //运行saga中Generator function

export default store;


// 创建图书馆 传入reducer接收操作后数据
// store把action转发给reducer reducer操作完 再更新回来


//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  这个调试工具 也是一个中间件，作为第二个参数传入