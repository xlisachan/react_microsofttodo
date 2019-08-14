import TopSection from '../../components/MoreInfo/TopSection';
import { connect } from 'react-redux';
import { openMore, removeStep, toggleCompleted, toggleImportant, toggleStep } from '../../actions'; 

const mapStateToProps = state => ({
    selectedTaskId: state.selectedTaskId,
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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);