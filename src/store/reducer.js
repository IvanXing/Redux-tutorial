const defaultState = {
    inputValue: '',
    list: []
}

// reducer可以接受state但是不能修改state 所以深拷贝一个state操作
export default (state = defaultState, action) => {
    console.log('目前的store:', state, '传来动作:', action)
    if (action.type === 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState 
    }
    if (action.type === 'add_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = '';
        return newState  
    }
    if (action.type === 'delete_todo_item') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1)
        return newState  
    }
    return state;
}


// reducer是个笔记本 记录 初始数据 操作 操作结束后数据