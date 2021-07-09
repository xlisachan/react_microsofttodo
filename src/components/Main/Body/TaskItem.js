import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { connect } from 'react-redux';

import { setTask } from '../../../actions/currentActions';
import { toggleCompleted, toggleImportant } from '../../../actions/tasksActions'; 

import TaskDetails from './TaskDetails';

const TaskItem = ({
    selectedTaskId,
    task,
    onClick = f => f,
    onSetTask = f => f,
    onToggleComplete = f => f,
    onToggleImportant = f => f
}) => {
    const handleClick = () => {
        onSetTask(task.task_id, task.item, task.note, task.steps);
        onClick();
    }

    const listStyle = id => {
        return {
            borderRadius: id === selectedTaskId ? 10 : null,
            backgroundColor: id === selectedTaskId ? '#eee' : null
        }
    };

    const listItem = () => {
        return {
            color: task.completedStatus ? 'dimgray' : 'black',
            textDecoration: task.completedStatus ? 'line-through' : 'none'
        }
    };

    return ( 
        <div className="main-list-item align-center space-between" 
            style={ listStyle(task.task_id) } onClick={ handleClick }>
            
            <div style={{display: 'flex', alignItems: 'center'}}>
                {task.completedStatus ? (
                    <FaCheckCircle
                        className="list-icon green list-icon-margin-rt"
                        onClick={() => onToggleComplete(task.task_id)}
                    />
                ) : (
                    <FaRegCircle
                        className="list-icon list-icon-margin-rt gray"
                        onClick={() => onToggleComplete(task.task_id)}
                    />
                )}

                <span style={ listItem() }>
                    { task.item }

                    <TaskDetails task={ task } />
                </span>
            </div>

            {task.importantStatus ? (
                <FaStar
                    className="list-icon blue" 
                    onClick={() => onToggleImportant(task.task_id)}
                />
            ) : (
                <FaRegStar 
                    className="list-icon gray"
                    onClick={() => onToggleImportant(task.task_id)}
                /> 
            )}
        </div>
    );
};

TaskItem.propTypes = {
    selectedTaskId: PropTypes.string,
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"]
});

const mapDispatchToProps = dispatch => ({
    onSetTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
