import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators';

function* getInitList() {
    try {
        // const axiosdata = yield axios.get('/api/list');
        const axiosdata = ['hello', 'small', 'fatty']
        const action = initListAction(axiosdata);
        yield put(action);
    }catch(e) {
        console.log('网络请求发送失败');
    }
    
}

function* mySaga() {
    // takeEvery 是捕捉每一个派发的action 接收类型 执行第二个参数
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;