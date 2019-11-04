import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { toggleCompleted } from '../../../../actions/tasksActions';

const Completed = ({selectedTask, onToggleComplete=f=>f}) => {
    const completed =
        <FaCheckCircle 
            className="list-icon list-icon-margin-rt green" 
            onClick={() => onToggleComplete(selectedTask[0].task_id)}
        />

    const notCompleted =
        <FaRegCircle 
            className="list-icon list-icon-margin-rt gray" 
            onClick={() => onToggleComplete(selectedTask[0].task_id)}
        />

    return (
        <span>
            { selectedTask[0].completedStatus ? completed : notCompleted }
        </span>
    );
};

Completed.propTypes = {
    selectedTask: PropTypes.array,
    onToggleComplete: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(Completed);