import React from 'react'

var qwest = require('qwest')

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.state.isLoading = false;
  }

  onClick() {
    var that = this;
    that.state.isLoading = true;
    that.forceUpdate();
    qwest
      .put(CONFIG.BACKEND_ADDRESS+'/task/changeStatus/'+this.state._id)
      .then((xhr, response) => {
        that.setState(response);
        that.state.isLoading = false;
        that.forceUpdate();
      });
  }

  render() {
    return (
      <div onClick={ () => { return this.onClick.apply(this, arguments) } } className={ this.state.isDone ? 'task-done' : 'task-waiting' }>
        <span className={ 'left' }>{ this.state.msg }</span>
        <span className={ this.state.isLoading ? 'loading-active' : 'loading-not-active' }></span>
        <span className={ 'right' }>
          <div>{ this.state.date }</div>
          <div>{ this.state.isDone ? 'Done' : 'Waiting' }</div>
        </span>
      </div>
    )
  }
}

export default Tasks
