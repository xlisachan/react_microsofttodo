import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { editTitle, removeStep, setTask, toggleCompleted, toggleImportant, toggleStep} from '../../actions'; 

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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);