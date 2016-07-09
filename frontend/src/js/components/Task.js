import React from 'react'

var qwest = require('qwest')

class Tasks extends React.Component {
  render() {
    var task = this.props.data;
    return (
      <div className={ task.isDone ? 'task-done' : 'task-waiting' }>
        <span className={ 'left' }>{ task.msg }</span>
        <span className={ 'right' }>
          <div>{ task.date }</div>
          <div>{ task.isDone ? 'Done' : 'Waiting' }</div>
        </span>
      </div>
    )
  }
}

export default Tasks
