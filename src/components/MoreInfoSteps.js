import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';
import { List, ListItem } from '@material-ui/core';

import { setStep } from '../actions/currentActions'; 
import { removeStep, toggleStep, updateStep } from '../actions/tasksActions';
import AddItem from './AddItem';
import DeleteModal from './DeleteModal';

const MoreInfoSteps = ({
    currentStep,
    currentSteps,
    selectedTask,
    step,
    onRemoveStep = f => f,
    onSetStep = f => f,
    onToggleStep = f => f,
    onUpdateStep = f => f
}) => {
    if (!selectedTask[0]) return null;

    const stepContainer = id => {
        return {
            backgroundColor: currentStep.id === id ? '#eee' : null,
        }
    }

    const stepStyle = step => {
        return step.completedStatus ?
            {
                color: 'dimgray',
                textDecoration: 'line-through'
            } : {
                color: 'black',
                textDecoration: 'none'
            }
    }

    const onSubmit = e => {
        e.preventDefault();

        if (currentStep.step === '') {
            let subStep = currentStep[0].step;
            onUpdateStep(currentStep.id, subStep, selectedTask[0].task_id);
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
        const el = currentSteps.filter(selected => selected.id === step.id);

        if (!el[0]) return
        return el[0].step
    }

    const renderSteps = () => {
        if (selectedTask[0].steps.length === 0) return null;
        
        return selectedTask[0].steps.map(step =>
            <ListItem
                key={`${step.step}_${step.id}`}
                className="moreinfo-step"
                style={stepContainer(step.id)}
                onClick={() => onSetStep(step.id, step.step)}>

                <div className="align-center">
                    {step.completedStatus ? (
                        <FaCheckCircle 
                            className="moreinfo-step-margin-rt green" 
                            onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
                        />
                    ) : (
                        <FaRegCircle 
                            className="moreinfo-step-margin-rt gray" 
                            onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
                        />
                    )}
                    
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
                    location={ 'moreinfo-top' }
                    name={ step.step }
                    todo={ 'step' }
                    onClick={() => onRemoveStep(selectedTask[0].task_id, step.id)}
                />
            </ListItem>
        )
    }
    
    return (
        <div className="moreinfo-body-steps">
            <List>
                { renderSteps() }
            </List>

            <AddItem
                addItem={'step'}
                placeholder={
                    selectedTask[0].steps.length > 0 ?
                        'Next Step' : 'Add step'
                }
            />
        </div>
        
    );
};

MoreInfoSteps.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoSteps);
