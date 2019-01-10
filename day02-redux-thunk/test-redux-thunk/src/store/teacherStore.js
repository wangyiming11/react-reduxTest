import axios from "axios";

let teacherState={
    list:[],
    visible:false
}


export function addTeacher(){
    return{
        type:'ADD_TEACHER'
    }
}

export function deleteTeacherById(){
    return{
        type:'DETELE_TEACHER'
    }
}

//异步加载
export function loadTeacher(){
    return(disptach)=>{
        disptach(noChangeTeacherData());
        setTimeout(function(){
            let url="http://134.175.154.93:8099/index/findAllCategory";
            axios.get(url).then((result)=>{
                disptach(changeData(result.data.data));
            })
        },2000);
    }
}

function changeData(teacherData){
    return{
        type:'CHANGE_TEACHER',
        list:teacherData
    }
}

function noChangeTeacherData(){
    return{
        type:'NO_CHANGETEACHERDATA'
    }
}



function teacherReducer(state=teacherState,action){
    switch(action.type){
        case 'ADD_TEACHER':
            return{
                ...state,
                list:[...state.list,{id:1002}]
            }
        case 'DETELE_TEACHER':
            state.list.pop();
            return{
                ...state,
                list:state.list
            }
        case 'CHANGE_TEACHER':
            return{
                ...state,
                list:action.list,
                visible:false
            }
        case "NO_CHANGETEACHERDATA":
            return{
                ...state,
                visible:true
            }
        default:
            return state;
    }
}

export default teacherReducer;