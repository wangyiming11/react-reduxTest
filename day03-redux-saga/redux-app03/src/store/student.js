// state
let initState = {
  isLoading:false,
  list:[],
  message:'',
  article:[],
  category:[]
}
// action generator
// 将学生信息设置到state中
export function setStudent(payload){
  return {
    type:'SET_STUDENT',
    payload
  }
}
// 开始加载学生信息
export function beginLoadingStudent() {
  return {
    type:'BEGIN_LOADING_STUDENT'
  }
}
// 显示消息
export function showMsg(payload) {
  return {
    type:'SHOW_MESSAGE',
    payload
  }
}
// 关闭小时显示
export function closeMsg(){
  return {
    type:'CLOSE_MESSAGE'
  }
}


//异步action触发的同步action方法
export function setCtegory(result){
  return{
    type:'SET_CATEGORY',
    resulr:result
  }
}

export function setArticle(result){
  return{
    type:'SET_ARTICLE',
    resulr:result
  }
}

// reducers
function studentReducer(state = initState, action) {
  switch(action.type) {
    case 'SET_CATEGORY':
    return{
      ...state,
      category:action.resulr
    }
    case 'SET_ARTICLE':
    return{
      ...state,
      article:action.resulr
    }
    case 'SET_STUDENT': 
      return {
        ...state,
        isLoading:false,
        list:action.payload
      }
    case 'BEGIN_LOADING_STUDENT':
      return {
        ...state,
        isLoading:true
      }
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message:action.payload
      }
    case 'CLOSE_MESSAGE':
      return {
        ...state,
        message:''
      }
    default:
      return state;
  }
}

export default studentReducer;