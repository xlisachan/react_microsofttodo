import Step from '../../../components/MoreInfo/Steps/Step';
import { connect } from 'react-redux';
import { removeStep, setStep, toggleStep, updateStep } from '../../../actions'; 

const mapStateToProps = state => ({
    currentStep: state.current.step,
    currentSteps: state.current.taskSteps,
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
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(Step);