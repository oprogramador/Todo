import { combineReducers } from 'redux'
import { TASK_S } from './../actions'

const tasks = (state = { message: 'Task' }, action) => {
  switch (action.type) {
    case TASK_S:
      return Object.assign({}, state, { message: 'Task, s!' })
    default:
      return state
  }
}

const taskReducer = combineReducers({
  tasks
})

export default taskReducer
