import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setStep } from '../../../../../actions/currentActions'; 
import { removeStep, toggleStep, updateStep } from '../../../../../actions/tasksActions';
import Step from './Step';

const StepContainer = ({currentStep, currentSteps, selectedTask, step, onRemoveStep=f=>f, onSetStep=f=>f, onToggleStep=f=>f, onUpdateStep=f=>f}) => {
    const stepContainer = id => {
        return {
            padding: '8px 16px',
            backgroundColor: currentStep.id === id ? '#eee' : null
        }
    }

    const stepStyle = step => {
        return {
            color: step.completedStatus ? 'dimgray' : 'black',
            textDecoration: step.completedStatus ? 'line-through' : 'none'
        }
    }

    const onSubmit = e => {
        e.preventDefault();

        if (currentStep.step === '') {
            let subStep = currentStep[0].step;
            onUpdateStep(currentStep.id, subStep, selectedTask[0].task_id)
        } else {
            onUpdateStep(currentStep.id, currentStep.step, selectedTask[0].task_id);
        }
    }

    const onEnterPress = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
        }
    }

    const getPlaceholder = (step) => {
        const el = currentSteps.filter(selected => selected.id === step.id)

        if (!el[0]) return
        return el[0].step
    }

    
    return (
        <Step
            step={ step }
            selectedTask={ selectedTask }
            getPlaceholder={ getPlaceholder }
            onEnterPress={ onEnterPress }
            onRemoveStep={ onRemoveStep }
            onSetStep={ onSetStep }
            onToggleStep={ onToggleStep }
            stepContainer={ stepContainer }
            stepStyle={ stepStyle }
        />
    );
};

StepContainer.propTypes = {
    currentStep: PropTypes.object,
    currentSteps: PropTypes.array,
    selectedTask: PropTypes.array,
    step: PropTypes.object,
    onRemoveStep: PropTypes.func.isRequired,
    onSetStep: PropTypes.func.isRequired,
    onToggleStep: PropTypes.func.isRequired,
    onUpdateStep: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentStep: state.current.step,
    currentSteps: state.current.taskSteps,
});

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
});

export default connect(mapStateToProps, mapDispatchToProps)(StepContainer);