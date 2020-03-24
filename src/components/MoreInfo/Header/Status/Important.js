import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleImportant } from '../../../../actions/tasksActions';
import { FaStar, FaRegStar } from 'react-icons/fa';

const Important = ({selectedTask, onToggleImportant=f=>f}) => {
    const important =
        <FaStar 
            className="list-icon blue" 
            onClick={() => onToggleImportant(selectedTask[0].task_id)}
        />
    
    const notImportant =
        <FaRegStar 
            className="list-icon gray" 
            onClick={() => onToggleImportant(selectedTask[0].task_id)}
        />

    return selectedTask[0].importantStatus ? important : notImportant;
};

Important.propTypes = {
    selectedTask: PropTypes.array,
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