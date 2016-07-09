import '../../sass/app'
import React from 'react'
import Tasks from './../containers/Tasks'
import Form from './../components/Form'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.state || {};
    this.state.shouldShowForm = false;
  }

  toggleForm() {
    this.state.shouldShowForm ^= true;
    this.forceUpdate();
  }

  addTask(task) {
    this.refs.tasks.addTask(task);
  }

  render() {
    return (
      <div className={ 'appContainer' }>
        <Tasks ref="tasks"/>
        <button className={ 'showFormButton' } onClick={ this.toggleForm.bind(this) }>add</button>
        { this.state.shouldShowForm ? <Form addTaskCallback={ this.addTask.bind(this) } /> : null }
      </div>
    )
  }
}

export default App
