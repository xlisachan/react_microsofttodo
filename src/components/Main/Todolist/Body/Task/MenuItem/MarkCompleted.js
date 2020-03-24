import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItem } from 'react-contextmenu';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';
import { toggleCompleted } from '../../../../../../actions/tasksActions'; 

const MarkCompleted = ({task, onToggleComplete=f=>f}) => {
    const markNotCompleted =
        <div onClick={() => onToggleComplete(task.task_id)}>
            <FaRegCheckCircle className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as not completed</span>
        </div>

    const markCompleted =
        <div onClick={() => onToggleComplete(task.task_id)}>
            <FaCheckCircle className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as completed</span>
        </div>
        
    return (
        <MenuItem>
            { task.completedStatus ? markNotCompleted : markCompleted }
        </MenuItem>
    );
};

const mapDispatchToProps = dispatch => ({
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    }
});

MarkCompleted.propTypes = {
    task: PropTypes.object.isRequired,
    onToggleComplete: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(MarkCompleted);