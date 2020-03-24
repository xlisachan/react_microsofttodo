import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleImportant } from '../../../../../actions/tasksActions'; 
import { FaStar, FaRegStar } from 'react-icons/fa';

const Important = ({task, onToggleImportant=f=>f}) => {
    const important =
        <FaStar 
            className="list-icon blue" 
            onClick={() => onToggleImportant(task.task_id)}
        />
    
    const notImportant =
        <FaRegStar 
            className="list-icon gray"
            onClick={() => onToggleImportant(task.task_id)}
        />

    return task.importantStatus ? important : notImportant;
};

Important.propTypes = {
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

export default connect(null, mapDispatchToProps)(Important);