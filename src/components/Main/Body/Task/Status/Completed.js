import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCompleted } from '../../../../../actions/tasksActions'; 
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Completed = ({task, onToggleComplete=f=>f}) => {
    const completed =
        <FaCheckCircle 
            className="list-icon green list-icon-margin-rt" 
            onClick={() => onToggleComplete(task.task_id)}
        />
        
    const notCompleted =
        <FaRegCircle 
            className="list-icon list-icon-margin-rt gray" 
            onClick={() => onToggleComplete(task.task_id)}
        />
        
    return (
        <span>
            { task.completedStatus ? completed : notCompleted }
        </span>
    )
};

Completed.propTypes = {
    task: PropTypes.object.isRequired,
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