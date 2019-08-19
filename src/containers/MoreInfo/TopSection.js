import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { clearItem, editTitle, removeStep, setStep, setTask, submitTitle, toggleCompleted, toggleImportant, toggleStep, updateTask } from '../../actions'; 

const mapStateToProps = state => ({
    currentStep: state.current["taskStep"],
    currentSteps: state.current["taskSteps"],
    currentTask: state.current["taskItem"],
    selectedTaskId: state.current["taskId"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },

    onToggleStep(taskId, stepId) {
        dispatch(
            toggleStep(taskId, stepId)
        )
    },

    onRemoveStep(taskId, stepId) {
        dispatch(
            removeStep(taskId, stepId)
        )
    },

    onSetTask(task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            editTitle()
        )
    },

    onSetStep(completedStatus, id, step, taskId) {
        dispatch(
            setStep(completedStatus, id, step, taskId)
        )

        dispatch(
            editTitle()
        )
    },

    onUpdateTask(id, task) {
        dispatch(
            setTask(task)
        )

        dispatch(
            updateTask(id, task)
        )

        dispatch(
            submitTitle()
        )

        dispatch(
            clearItem()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);