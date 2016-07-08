import React from 'react'
import Tasks from './../containers/Tasks'

var qwest = require('qwest')

class App extends React.Component {
  componentDidMount() {
    var that = this;
    qwest
      .get('http://localhost:3001/task/all')
      .then(function(xhr, response) {
        that.tasks = response;
        that.forceUpdate();
      });
  }

  render() {
    if (this.tasks && this.tasks.map) {
      return (
        <div>
        {
          this.tasks.map(function(task) {
            return (
              <div key={ Math.random() }>
                <span>{ task.msg }</span>
                <span>
                  <div>{ task.date }</div>
                  <div>{ task.isDone ? 'Done' : 'Waiting' }</div>
                </span>
              </div>
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

export default App
