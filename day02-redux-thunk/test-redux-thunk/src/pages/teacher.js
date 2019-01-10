
import React,{Component} from 'react';
import {connect} from 'react-redux'

import {addTeacher,deleteTeacherById,loadTeacher} from '../store/teacherStore'

class Teacher extends Component{

    handlerAdd=()=>{
       this.props.dispatch(addTeacher());
    }

    handlerDelete=()=>{
        this.props.dispatch(deleteTeacherById());
    }

    handlerLoad=()=>{
        this.props.dispatch(loadTeacher())
    }



    render(){
        let {list,visible} =this.props.teacher;
        let visibily;
        if(visible){
            visibily="显示";
        }else{
            visibily="隐藏"
        }
        return(
            <div>
                <h2>教师管理-----</h2>
                <div>
                    教师信息：{JSON.stringify(list)}
                    <h4>{visibily}</h4>
                </div>
                <div>
                    <button onClick={this.handlerAdd}>添加</button>
                    <button onClick={this.handlerDelete}>删除</button>
                    <button onClick={this.handlerLoad}>加载</button>
                </div>
            </div>
        )
    }
}



export default connect(state=>state)(Teacher);