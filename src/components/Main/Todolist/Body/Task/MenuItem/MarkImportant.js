import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItem } from 'react-contextmenu';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { toggleImportant } from '../../../../../../actions/tasksActions'; 

const MarkImportant = ({task, onToggleImportant=f=>f}) => {
    const removeImportance =
        <div onClick={() => onToggleImportant(task.task_id)}>
            <FaRegStar className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Remove importance</span>
        </div>
    
    const markImportant =
        <div onClick={() => onToggleImportant(task.task_id)}>
            <FaStar className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as important</span>
        </div>

    return (
        <MenuItem>
            { task.importantStatus ? removeImportance : markImportant }
        </MenuItem>
    );
};

MarkImportant.propTypes ={
    task: PropTypes.object.isRequired,
    onToggleImportant: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(MarkImportant);