import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index'


class TodoList extends Component {

    constructor(props){
        super(props);
        // 从store中拿数据
        this.state = store.getState(); 
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // 订阅store变化
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                    <Input 
                        value={this.state.inputValue} 
                        placeholder="todo info" 
                        style={{width: '300px', marginRight: '10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List
                    style={{marginTop: '10px', width: '300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
                />
            </div>
        )
    }

    // 监听执行store.subscribe
    handleStoreChange() {
        // 更新替换数据
        this.setState(store.getState(), ()=>{console.log('更新后的数据', this.state)});
    }

    // input输入变化 发起action 
    handleInputChange(e) {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        // action 发给 store
        store.dispatch(action);
    }

    // 点击确定加入列表
    handleBtnClick() {
        const action = {
            type: 'add_todo_item',
        }
        store.dispatch(action);
    }

    // 删除列表某项
    handleItemDelete(index) {
        const action = {
            type: 'delete_todo_item',
            index
        }
        store.dispatch(action);
    }
    
}

export default TodoList;
