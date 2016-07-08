import { connect } from 'react-redux'
import { TASK_S } from './../actions'
import Task from './../components/Task'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.tasks.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({ type: TASK_S })
    }
  }
}

const Tasks = connect(
  mapStateToProps,
  mapDispatchToProps
)(Task)

export default Tasks
