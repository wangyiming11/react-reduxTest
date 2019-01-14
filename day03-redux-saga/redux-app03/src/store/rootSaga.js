
//当前页面用来创建异步的action，前台页面党文当前页面中方法触发异步action发送请求，返回结果put给同步action修改数据


import axios from 'axios';
import {put} from 'redux-saga/effects';
import {takeEvery} from 'redux-saga'

//引入需要触发的同步action函数
import {setCtegory,setArticle} from './student'



//封装函数用来多次发送异步axios请求,将查询结果返回给调用者
function handlerAxios(url){
    return axios.get(url);
}

//当前函数为异步的action saga函数，需要其他函数触发当前函数发送异步请求
function* loadData(){
    //获取栏目信息
    let curl = 'http://134.175.154.93:8099/index/findAllCategory';
    let category=yield handlerAxios(curl);
    //获取栏目id，后续文章根据栏目id进行文章获取
    let cid=category.data.data[0].id;
    //调用redux-saga中的put方法，将查询结果交给同步action函数修改数据（所有数据均为同步action进行修改）
    yield put(setCtegory(category.data.data));

    //获取文章信息
    let aurl = 'http://134.175.154.93:8099/index/findArticleByCategoryId?categoryId='+cid;
    let article=yield handlerAxios(aurl);
    yield put(setArticle(article));

}


//声明前台页面触发的请求函数，当前函数中返回一个需要触发异步action的type；将该函数导出便于前台页面中调用
export function axyncLoad(){
    return{
        type:'LOAD_DATA'
    }
}


//声明函数将action Type对象和异步action进行关联，前台触发请求函数后触发相指定的异步action函数
function* rootSaga(){
    //需要使用redux-saga中的函数进行关联
    yield takeEvery('LOAD_DATA',loadData);
}


//将关联函数导出，便于在store/index.js中创建saga中间件并应用
export default rootSaga;