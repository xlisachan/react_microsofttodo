import React, { useState }from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { List, ListItem } from '@material-ui/core';
import AddItem from '../../containers/AddItem';
import DeleteModal from '../DeleteModal';

const TopSection = ({selectedTaskId, tasks, onRemoveStep=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onToggleStep=f=>f}) => {
    const [currentStep, setCurrentStep] = useState(null);
    const selectedTask = tasks.filter(task => task.task_id === selectedTaskId);
    if (!selectedTask[0]) return null;

    const topStyle = () => {
        return {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingBottom: 0
        }
    }

    const stepContainer = (id) => {
        return {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: currentStep === id ? '#eee' : null
        }
    }

    const stepStyle = (step) => {
        return {
            color: step.completedStatus ? 'dimgray' : 'black',
            textDecoration: step.completedStatus ? 'line-through' : 'none'
        }
    }

    const renderCompleted = (item, status, taskId, func, stepId) => {
        return status ? 
            <FaCheckCircle
                style={{fontSize: item==='task' ? '1.5rem': '1.2rem', color: 'limegreen', marginRight: item==='task' ? 15 : 18}}
                onClick={() => func(taskId, stepId)}
            />
            :
            <FaRegCircle
                style={{fontSize: item==='task' ? '1.5rem': '1.2rem', color: 'gray', marginRight: item==='task' ? 15 : 18}}
                onClick={() => func(taskId, stepId)}
            />
    }

    const renderTodoItem = () => {
        return <p className="more-list-title">{selectedTask[0].item}</p>
    }

    const renderImportant = () => {
        return selectedTask[0].importantStatus ? 
            <FaStar 
                style={{fontSize: '1.5rem', color: 'royalblue'}}
                onClick={() => onToggleImportant(selectedTask[0].task_id)}
            />
            :
            <FaRegStar
                style={{fontSize: '1.5rem', color: 'gray'}}
                onClick={() => onToggleImportant(selectedTask[0].task_id)}
            />
    }

    const renderSteps = () => {
        if (selectedTask[0].steps.length === 0) return null;
        
        return (
            <List style={{padding: '0px 4px 0px 2px'}}>
                {selectedTask[0].steps.map(step => 
                    <ListItem key={`${step.step}_${step.id}`} style={ stepContainer(step.id) } onClick={() => setCurrentStep(step.id)}>
                        <div>
                            { renderCompleted('step', step.completedStatus, selectedTask[0].task_id, onToggleStep, step.id) }
                            <span style={ stepStyle(step) }>{step.step}</span>
                        </div>

                        <DeleteModal 
                            id={ step.id }
                            location={ 'more-top' }
                            name={ step.step }
                            todo={ 'step' }
                            onClick={() => onRemoveStep(selectedTask[0].task_id, step.id)}
                        />
                    </ListItem>
                )}
            </List>
        )
    }

    return (
        <div>
            <ListItem style={ topStyle() }>
                <div style={{display: 'flex'}}>
                    { renderCompleted('task', selectedTask[0].completedStatus, selectedTask[0].task_id, onToggleComplete) }
                    { renderTodoItem() }
                </div>

                { renderImportant() }
            </ListItem>

            { renderSteps() }

            <AddItem addItem={'step'} placeholder={selectedTask[0].steps.length > 0 ? 'Next Step' : 'Add step'} />
        </div>
    );
}

TopSection.propTypes = {
    selectedTaskId: PropTypes.string,
    tasks: PropTypes.array.isRequired,
    onRemoveStep: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleStep: PropTypes.func.isRequired
}

export default TopSection;