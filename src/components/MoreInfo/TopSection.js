import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

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

    const renderCompleted = () =>
        <FaCheckCircle className="list-icon list-icon-margin-rt green" />

    const renderNotCompleted = () =>
        <FaRegCircle className="list-icon list-icon-margin-rt gray" />

    const renderImportant = () =>
        <FaStar className="list-icon blue" />
    
    const renderNotImportant = () =>
        <FaRegStar className="list-icon gray" />

    return (
        <ListItem style={ topStyle() }>
            <div style={{display: 'flex'}}>
                <span onClick={() => onToggleComplete(selectedTask[0].task_id)}>
                    { selectedTask[0].completedStatus ?  renderCompleted() : renderNotCompleted() }
                </span>

                <form onSubmit={onSubmit}>
                    <Textarea
                        type="text"
                        className="more-list-title"
                        value={ currentTask.task }
                        onChange={e => onSetTask(e.target.value)}
                        onKeyDown={e => onEnterPress(e)}
                    />
                </form>
            </div>

            <span onClick={() => onToggleImportant(selectedTask[0].task_id)}>
                { selectedTask[0].importantStatus ? renderImportant() : renderNotImportant() }
            </span>
        </ListItem>
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