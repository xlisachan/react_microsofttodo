import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import DeleteModal from '../DeleteModal';

const Step = ({currentStep, currentSteps, currentTaskId, step, tasks, onRemoveStep=f=>f, onSetStep=f=>f, onToggleStep=f=>f, onUpdateStep=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === currentTaskId);
    if (!selectedTask[0]) return null;

    const stepContainer = id => {
        return {
            backgroundColor: currentStep.id === id ? '#eee' : null
        }
    }

    const stepStyle = step => {
        return {
            color: step.completedStatus ? 'dimgray' : 'black',
            textDecoration: step.completedStatus ? 'line-through' : 'none'
        }
    }

    const renderCompleted = () => {
        return step.completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.2rem', color: 'limegreen', marginRight: 18}}
                onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.2rem', color: 'gray', marginRight: 18}}
                onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
            />
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
        <ListItem key={`${step.step}_${step.id}`} 
            style={ stepContainer(step.id) } 
            onClick={() => onSetStep(step.id, step.step)}>

            <div style={{display: 'flex', alignItems: 'center'}}>
                { renderCompleted() }
                
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
    currentTaskId: PropTypes.string.isRequired,
    step:PropTypes.object.isRequired,
    tasks:PropTypes.array.isRequired,
    onRemoveStep: PropTypes.func.isRequired,
    onSetStep: PropTypes.func.isRequired,
    onToggleStep: PropTypes.func.isRequired,
    onUpdateStep: PropTypes.func.isRequired
}

export default Step;