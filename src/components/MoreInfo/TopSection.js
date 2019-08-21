import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { List, ListItem } from '@material-ui/core';
import AddItem from '../../containers/AddItem';
import Step from '../../containers/MoreInfo/Step';

const TopSection = ({currentTask, tasks, onSetTask=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onUpdateTask=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === currentTask.id);
    if (!selectedTask[0]) return null;

    const topStyle = () => {
        return {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        }
    }

    const renderCompleted = () => {
        return selectedTask[0].completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}}
                onClick={() => onToggleComplete(selectedTask[0].task_id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}}
                onClick={() => onToggleComplete(selectedTask[0].task_id)}
            />
    }

    const onSubmit = e => {
        e.preventDefault();

        if (currentTask.task === '') {
            let subTask = selectedTask[0].item
            onUpdateTask(currentTask.id, subTask);
        } else {
            onUpdateTask(currentTask.id, currentTask.task);
        }
    }

    const onEnterPress = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
        }
    }

    const renderTodoItem = () => {
        return (
            <form onSubmit={onSubmit}>
                <Textarea
                    type="text"
                    className="more-list-title"
                    value={ currentTask.task }
                    onChange={e => onSetTask(e.target.value)}
                    onKeyDown={e => onEnterPress(e)}
                />
            </form>
        )
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
                { selectedTask[0].steps.map(step =>
                    <Step key={`step_${step.id}`} step={ step } />
                )}
            </List>
        )
    }

    return (
        <div>
            <ListItem style={ topStyle() }>
                <div style={{display: 'flex'}}>
                    { renderCompleted() }
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
    currentTask: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onUpdateTask: PropTypes.func.isRequired
}

export default TopSection;