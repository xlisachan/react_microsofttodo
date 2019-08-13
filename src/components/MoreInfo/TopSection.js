import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const TopSection = ({selectedTaskId, tasks, onToggleComplete=f=>f, onToggleImportant=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === selectedTaskId);
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

    return (
        <ListItem style={ topStyle() }>
            <div style={{display: 'flex'}}>
                { renderCompleted() }
                { renderTodoItem() }
            </div>

            { renderImportant() }
        </ListItem>
    );
}

TopSection.propTypes = {
    selectedTaskId: PropTypes.string,
    tasks: PropTypes.array.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired
}

export default TopSection;