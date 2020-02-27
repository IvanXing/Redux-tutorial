import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

class TodoList extends Component {

    constructor(props){
        super(props);
        // 从store中拿数据
        this.state = store.getState(); 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        // 订阅store变化
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    // 监听执行store.subscribe
    handleStoreChange() {
        // 更新替换数据
        this.setState(store.getState(), ()=>{console.log('更新后的数据', this.state)});
    }

    // input输入变化 发起action 
    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        // 在actionCreators中统一定义type
        const action = getInputChangeAction(e.target.value)
        // action 发给 store
        store.dispatch(action);
    }

    // 点击确定加入列表
    handleBtnClick() {
        // const action = {
        //     type: ADD_TODO_ITEM,
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    // 删除列表某项
    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action);
    }
    
}

export default TodoList;
