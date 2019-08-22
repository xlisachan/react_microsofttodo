import Step from '../../components/MoreInfo/Step';
import { connect } from 'react-redux';
import { clearItem, editTitle, removeStep, setStep, submitTitle, toggleStep, updateStep } from '../../actions'; 

const mapStateToProps = state => ({
    currentStep: state.current.step,
    currentSteps: state.current.taskSteps,
    currentTaskId: state.current.task["id"],
    tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({

    onRemoveStep(taskId, stepId) {
        dispatch(
            removeStep(taskId, stepId)
        )
    },

    onSetStep(id, step) {
        dispatch(
            setStep(id, step)
        )

        dispatch(
            editTitle()
        )
    },

    onToggleStep(taskId, stepId) {
        dispatch(
            toggleStep(taskId, stepId)
        )
    },

    onUpdateStep(id, step, taskId) {
        dispatch(
            setStep(id, step, taskId)
        )
    
        dispatch(
            updateStep(id, step, taskId)
        )
    
        dispatch(
            submitTitle()
        )
    
        dispatch(
            clearItem()
        )
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Step);