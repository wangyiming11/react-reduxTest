

//4.引入studentStore以及thunk以便发送异步请求
import studentReducer from './studentStore';
import teacherReducer from './teacherStore';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

//5.执行createStore函数
//单个store可以：let store=createStore(studentReducer,applyMiddleware(thunk));

//多个store合并
let manyReducer=combineReducers({
    student:studentReducer,
    teacher:teacherReducer
})

let store=createStore(manyReducer,applyMiddleware(thunk));


//6.导出store,注册在index.js的跟组件中
export default store;
