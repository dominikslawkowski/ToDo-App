import React, { Component } from 'react';
import { connect } from 'react-redux';

//About action creator
import { bindActionCreators } from 'redux';
import {selectTask} from '../actions/TASK_SELECTED';

class ToDoList extends Component{
    renderList(){
        return this.props.ToDoList.map((element, index)=>{
            return( 
                <li key={index} onClick={()=>this.props.selectTask(element)}>
                            <div className="title">{element.title}</div>
                            <div className="description">{element.description}</div>
                </li>
            );
        })
    }

    render(){
        return(
            <ul id="todo-list">
                {this.renderList()}
            </ul>
        )
    }
}


function mapStateToProps(state){
    return{
        ToDoList: state.ToDoList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTask: selectTask}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);