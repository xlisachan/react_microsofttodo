import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { openMore, removeStep, setTask, toggleCompleted, toggleImportant, toggleStep, updateTask } from '../../actions'; 

const mapStateToProps = state => ({
    currentTask: state.current["taskItem"],
    selectedTaskId: state.current["taskId"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )

        dispatch(
            openMore()
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )

        dispatch(
            openMore()
        )
    },

    onToggleStep(taskId, stepId) {
        dispatch(
            toggleStep(taskId, stepId)
        )

        dispatch(
            openMore()
        )
    },

    onRemoveStep(taskId, stepId) {
        dispatch(
            removeStep(taskId, stepId)
        )

        dispatch(
            openMore()
        )
    },

    onSetTask(id, task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            updateTask(id, task)
        )

        dispatch(
            openMore()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);