import React, { Component } from 'react';
import './App.css';

//引入子组件
import Student from './pages/student'
import Teacher from './pages/teacher'

class App extends Component {
  render() {
    return (
      <div className="App">
        根组件---
        <Student/>
        -------------------------------------------
        <Teacher/>

        -------------------------------------------

      </div>
    );
  }
}

export default App;



