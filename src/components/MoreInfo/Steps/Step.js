import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import DeleteModal from '../../DeleteModal';

const Step = ({currentStep, currentSteps, selectedTask, step, onRemoveStep=f=>f, onSetStep=f=>f, onToggleStep=f=>f, onUpdateStep=f=>f}) => {
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

    const renderCompleted = () =>
        <FaCheckCircle className="step-margin-rt green" style={{fontSize: '1rem'}} />
    
    const renderNotCompleted = () =>
        <FaRegCircle className="step-margin-rt gray" style={{fontSize: '1rem'}} />

    return (
        <ListItem key={`${step.step}_${step.id}`} style={ stepContainer(step.id) } onClick={() => onSetStep(step.id, step.step)}>
            <div className="align-center">
                <span onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}>
                    { step.completedStatus ?  renderCompleted() : renderNotCompleted() }
                </span>
                
                <Textarea
                    style={ stepStyle(step) }
                    type="text"
                    value={getPlaceholder(step)}
                    onChange={e => onSetStep(step.id, e.target.value)}
                    onKeyPress={e => onEnterPress(e)}
                />
            </div>

            <DeleteModal 
                id={ step.id }
                location={ 'more-top' }
                name={ step.step }
                todo={ 'step' }
                onClick={() => onRemoveStep(selectedTask[0].task_id, step.id)}
            />
        </ListItem>
    );
}

Step.propTypes = {
    currentStep: PropTypes.object.isRequired,
    currentSteps: PropTypes.array.isRequired,
    selectedTask: PropTypes.array.isRequired,
    step: PropTypes.object.isRequired,
    onRemoveStep: PropTypes.func.isRequired,
    onSetStep: PropTypes.func.isRequired,
    onToggleStep: PropTypes.func.isRequired,
    onUpdateStep: PropTypes.func.isRequired
}

export default Step;