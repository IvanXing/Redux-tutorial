import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes'

const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接受state但是不能修改state 所以深拷贝一个state操作
export default (state = defaultState, action) => {

    console.log('目前的store:', state, '传来动作:', action)

    if (action.type === INIT_LIST_ACTION) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list = action.data;
        return newState  
    }

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState 
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState  
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState  
    }
    return state;
}


// reducer是个笔记本 记录 初始数据 操作 操作结束后数据