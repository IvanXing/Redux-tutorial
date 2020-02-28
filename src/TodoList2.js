import React, { Component } from 'react';
// import store from './store2/index';
import { connect } from 'react-redux';

class TodoList extends Component {
    render() {

        // 解构赋值取出 
        // const { inputValue, changeInputValue, handleClick, list } = this.props;

        return(
            <div>
                <div>
                    <input 
                        value={this.props.inputValue}  // store传入props
                        onChange={this.props.changeInputValue}  // props传出dispatch
                    />
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return <li onClick={this.props.handleDelete} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// 此时todolist只负责渲染，是一个ui组件，只有一个render方法 
// 可以写成一个无状态组件（函数）可以提升性能

// const TodoList = (props) => {
//      const { inputValue, changeInputValue, handleClick, list } = props;
//      return(
//         <div>
//             <div>
//                 <input 
//                     value={inputValue} 
//                     onChange={changeInputValue} 
//                 />
//                 <button onClick={handleClick}>提交</button>
//             </div>
//             <ul>
//                 {
//                     list.map((item, index) => {
//                         return <li key={index}>{item}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }



// Provide中传来的 store
// 把store中的数据映射给组件变成组件的 props 
// 参数state就是store中的数据
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

// store.dispatch 映射到props上, props调用dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {    // input改变 调用
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item',
            }
            dispatch(action);   // 发给store，store把action转发给reducer
        },
        handleDelete() {
            console.log('delete it')
        }
    }
}

// connect是连接，是TodoList和store做连接
// 怎么传入数据：规则在mapStateToProps中
// todolist是一个ui组件，但是和数据connect起来，返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);