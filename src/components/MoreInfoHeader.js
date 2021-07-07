import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import Textarea from 'react-textarea-autosize';

import { setTask } from '../actions/currentActions'; 
import { toggleCompleted, toggleImportant, updateTask } from '../actions/tasksActions';

const MoreInfoHeader = ({
    currentTask,
    selectedTask,
    onSetTask = f => f,
    onToggleComplete = f => f,
    onToggleImportant = f => f,
    onUpdateTask = f => f
}) => {
    if (!selectedTask[0]) return null;

    const onSubmit = e => {
        e.preventDefault();

        if (currentTask.task === '') {
            let subTask = selectedTask[0].item;
            onUpdateTask(
                currentTask.id,
                subTask,
                selectedTask[0].note,
                selectedTask[0].steps);
        } else {
            onUpdateTask(
                currentTask.id,
                currentTask.task,
                selectedTask[0].note,
                selectedTask[0].steps);
        }
    }

    const onEnterPress = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
        }
    }

    return (
        <div className="moreinfo-margins moreinfo-header">
            <div style={{display: 'flex'}}>
                {selectedTask[0].completedStatus ? (
                    <FaCheckCircle 
                        className="list-icon list-icon-margin-rt green" 
                        onClick={() => onToggleComplete(selectedTask[0].task_id)}
                    />
                ) : (
                    <FaRegCircle 
                        className="list-icon list-icon-margin-rt gray" 
                        onClick={() => onToggleComplete(selectedTask[0].task_id)}
                    />
                )}

                <form onSubmit={onSubmit}>
                    <Textarea
                        type="text"
                        className="moreinfo-list-title"
                        value={ currentTask.task }
                        onChange={e => onSetTask(currentTask.id, e.target.value, selectedTask[0].note, selectedTask[0].steps)}
                        onKeyDown={e => onEnterPress(e)}
                    />
                </form>
            </div>

            {selectedTask[0].importantStatus ? (
                <FaStar 
                    className="list-icon blue" 
                    onClick={() => onToggleImportant(selectedTask[0].task_id)}
                />
            ) : (
                <FaRegStar 
                    className="list-icon gray" 
                    onClick={() => onToggleImportant(selectedTask[0].task_id)}
                />
            )}
        </div>
    );
};

MoreInfoHeader.propTypes = {
    currentTask: PropTypes.object,
    selectedTask: PropTypes.array,
    onSetTask: PropTypes.func.isRequired,
    onUpdateTask: PropTypes.func.isRequired
}

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
    },

    onUpdateTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )

        dispatch(
            updateTask(id, task)
        )
    }
});

export default connect(null, mapDispatchToProps)(MoreInfoHeader);
