import React from 'react';
import ReactDOM from 'react-dom';
//import TodoList from './TodoList'; // redux thunk saga 演示组件
import TodoList from './TodoList2'; // react-redux演示组件

import { Provider } from 'react-redux'; 
import store from './store2'

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

// 演示react-redux
ReactDOM.render(App, document.getElementById('root'));


// ReactDOM.render(<TodoList />, document.getElementById('root'));


