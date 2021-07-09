import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import {
    FaCheckCircle,
    FaRegCheckCircle,
    FaRegStar,
    FaRegSun,
    FaStar,
} from 'react-icons/fa';
import { connect } from 'react-redux';

import {
    removeTask,
    toggleCompleted,
    toggleImportant,
    toggleMyDay
} from '../../../actions/tasksActions';
import TaskItem from './TaskItem';
import DeleteModal from '../../DeleteModal';

const Task = ({
    task,
    onClick = f => f,
    onClose = f => f,
    onRemoveTask = f => f,
    onToggleComplete = f => f,
    onToggleImportant = f => f,
    onToggleMyDay=f=>f
}) => {
    const handleRemove = () => {
        onRemoveTask(task.task_id);
        onClose();
    }

    return (
        <div className="main-body-task">
            <ContextMenuTrigger id={`menuitem_${task.task_id}`}>
                <TaskItem task={ task } onClick={ onClick } />
            </ContextMenuTrigger>

            <ContextMenu id={`menuitem_${task.task_id}`}>
                <MenuItem>
                    {task.my_day ? (
                        <div onClick={() => onToggleMyDay(task.task_id)}>
                            <FaRegSun className="list-icon task-menu-item" />
                            <span>Remove from My Day</span>
                        </div>
                    ) : (
                        <div onClick={() => onToggleMyDay(task.task_id)}>
                            <FaRegSun className="list-icon task-menu-item" />
                            <span>Add to My Day</span>
                        </div>   
                    )}
                </MenuItem>

                <MenuItem>
                    {task.completedStatus ? (
                        <div onClick={() => onToggleComplete(task.task_id)}>
                            <FaRegCheckCircle className="list-icon task-menu-item" />
                            <span>Mark as not completed</span>
                        </div>
                    ) : (
                        <div onClick={() => onToggleComplete(task.task_id)}>
                            <FaCheckCircle className="list-icon task-menu-item" />
                            <span>Mark as completed</span>
                        </div> 
                    )}
                </MenuItem>
                
                <MenuItem>
                    {task.importantStatus ? (
                        <div onClick={() => onToggleImportant(task.task_id)}>
                            <FaRegStar className="list-icon task-menu-item" />
                            <span>Remove importance</span>
                        </div>
                    ) : (
                        <div onClick={() => onToggleImportant(task.task_id)}>
                            <FaStar className="list-icon task-menu-item" />
                            <span>Mark as important</span>
                        </div>
                    )}
                </MenuItem>
                
                <MenuItem divider />

                <MenuItem>
                    <DeleteModal 
                        id={ task.task_id }
                        location={ 'main-rightclick' }
                        name={ task.item }
                        todo={ 'task' }
                        onClick={ handleRemove }
                    />
                </MenuItem>
            </ContextMenu>
        </div>
    )
};

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    },
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },
    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(Task);