import '../../sass/form'
import React from 'react'
var FormData = require('react-form-data');
var reactMixin = require('react-mixin');

var qwest = require('qwest')

class Form extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    var that = this;
    qwest
      .post(CONFIG.BACKEND_ADDRESS+'/task', that.formData)
      .then((xhr, response) => {
        that.props.addTaskCallback(response);
        that.refs.form.reset();
      });
  }

  render() {
    return (
      <form ref={ 'form' } onSubmit={ this.onSubmit.bind(this) } onChange={ this.updateFormData.bind(this) }>
        <div>
          <label htmlFor={ 'taskMsg' }>Description:</label>
          <textarea id={ 'taskMsg' } className={ 'taskMsg' } name={ 'msg' }>
          </textarea>
        </div>
        <div>
          <label htmlFor={ 'taskDate' }>Due date:</label>
          <input placeholder={ 'YYYY-MM-DD HH:ii' } id={ 'taskDate' } className={ 'taskDate' } name={ 'date' }/>
        </div>
        <button className={ 'saveTaskBtn' } type={ 'submit' }>Save</button>
      </form>
    )
  }
}
reactMixin.onClass(Form, FormData);

export default Form
