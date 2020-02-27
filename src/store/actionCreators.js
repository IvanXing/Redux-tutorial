import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
// import axion from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
});

// 模拟接口获取数据action
export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

// 使用redux-thunk 把todolist中异步获取数据放到action中 
// 可以返回函数 普通action返回对象 
// 组件中dispatch时，action返回值是函数，会执行
export const getTodoList = () => {
    return (dispatch) => {
          // axios.get('/api/list').then((res) => {
        //     console.log(res)
        // })
        // 模拟返回值
        const thunkdata = ['hello', 'small', 'fatty']
        const action = initListAction(thunkdata);
        dispatch(action);
    }
}