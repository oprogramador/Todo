import React from 'react'
import Task from './../components/Task'

var qwest = require('qwest')

class Tasks extends React.Component {
  componentDidMount() {
    var that = this;
    qwest
      .get('http://localhost:3001/task/all')
      .then((xhr, response) => {
        that.tasks = response;
        that.forceUpdate();
      });
  }

  render() {
    if (this.tasks && this.tasks.map) {
      return (
        <div>
        {
          this.tasks.map((task) => {
            return (
              <Task key={ Math.random() } data={ task }></Task>
            )
          })
        }
        </div>
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }
}

export default Tasks
