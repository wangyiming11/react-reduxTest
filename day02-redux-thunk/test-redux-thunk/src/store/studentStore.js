

import axios from 'axios';

//1.创建学生初始信息状态 state

let studentState={
    list:[],
    visible:false
}


//2.创建返回action对象的函数-同步
   export function addStudent(){
        return{
            type:'ADD_STUDENT'
        }
    }

   export function deleteStudentById(){
        return {
            type:"DELETE_STUDENT"
        }
    }

    //发送异步请求,拿到结果后触发数据变化,拿不到结果时触发正在加载action
    export function loadStudent(){
        return (dispatch)=>{
            let url="http://134.175.154.93:8099/index/findAllCategory";
            dispatch(noChangeData());
            setTimeout(function(){
                axios.get(url).then((result)=>{
                    dispatch(changeData(result.data.data))
                });
            },2000)
        }
    }

    //数据变化action
    function changeData(newList){
        return{
            type:'CHANGE_STUDENTDATA',
            newList
        }
    }

    //数据未变化action
    function noChangeData(){
        return{
            type:'NO_CHANGEDATA'
        }
    }
  


//3.创建reducer函数，将state和action进行管理
    function StudentReducer(state=studentState,action){
        switch(action.type){
            case 'ADD_STUDENT':
                return{
                    ...state,
                    list:[...state.list,{id:1001}]
                }
            case 'DELETE_STUDENT':
                state.list.pop();
                return{
                    ...state,
                    list:state.list
                }
            case 'CHANGE_STUDENTDATA':
                return{
                    ...state,
                    list:action.newList,
                    visible:false
                }
            case 'NO_CHANGEDATA':
                return{
                    ...state,
                    visible:true
                }
            default:
                return state;
        }
    }


    export default StudentReducer;