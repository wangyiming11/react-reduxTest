import {createStore,combineReducers,applyMiddleware} from 'redux'
import studentReducer from './student'

//1.导入函数
  //引入创建saga中间件的函数
  import createSagaMiddleware from 'redux-saga';
  //引入rootSaga中的关联函数
  import rootSaga from './rootSaga'

//2.创建组件
  let sagaMiddleware=createSagaMiddleware(rootSaga);



let rootReducer = combineReducers({
  students:studentReducer
})

//3.使用saga中间件
let store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

//4.运行关联函数
sagaMiddleware.run(rootSaga);

export default store;