

import React,{Component} from 'react';
//导入connect 以便将state映射进当前页面
import {connect} from 'react-redux'
//导入studetStore中的action方法，以便触发
import {addStudent,deleteStudentById,loadStudent} from '../store/studentStore'

class Student extends Component{


    //自定义成员方法
    handlerAdd=()=>{
        this.props.dispatch(addStudent());

    }
    handlerDelete=()=>{
        this.props.dispatch(deleteStudentById());

    }
    handlerLoad=()=>{
        this.props.dispatch(loadStudent());
    }
    //渲染方法
    render(){
        let {list,visible}=this.props.student;
        return(
            <div>
                <h2>学生管理---</h2>
                <div>
                    学生信息：{JSON.stringify(list)}
                    <br/>
                    <h4>{JSON.stringify(visible)}</h4>
                </div>
                <div>
                    <button onClick={this.handlerAdd}>添加</button>
                    <button onClick={this.handlerDelete}>删除</button>
                    <button onClick={this.handlerLoad}>重新加载</button>
                </div>
            </div>
        )
    }
}


export default connect(state=>state)(Student);