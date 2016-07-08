import React, { PropTypes } from 'react'

const Task = ({ onClick, message }) => {
  return (
    <div>
      <h1>{ message }</h1>
      <button onClick={onClick}>Click</button>
    </div>
  )
}

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Task
