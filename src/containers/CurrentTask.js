import React, { Component } from 'react';
import { connect } from 'react-redux';

//About action creator
import { bindActionCreators } from 'redux';
import {deleteTask} from '../actions/TASK_DELETED';

class CurrentTask extends Component{
    render(){
        if (!this.props.CurrentTask) return null;

        return(
            <div className="current-task">
                <div className="title">{this.props.CurrentTask.title}</div>
                <div className="description">{this.props.CurrentTask.description}</div>
                <div className="more">{this.props.CurrentTask.more}</div>
                <button className="current-task-button" onClick={()=>this.props.deleteTask(this.props.CurrentTask)}>done</button>
            </div>
        )
}
}


function mapStateToProps(state){
    return{
        CurrentTask: state.CurrentTask
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask: deleteTask}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentTask);