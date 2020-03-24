import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const Completed = ({selectedTask, step, onToggleStep=f=>f}) => {
    const completed =
        <FaCheckCircle 
            className="step-margin-rt green" 
            style={{fontSize: '1rem'}} 
            onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
        />
    
    const notCompleted =
        <FaRegCircle 
            className="step-margin-rt gray" 
            style={{fontSize: '1rem'}} 
            onClick={() => onToggleStep(selectedTask[0].task_id, step.id)}
        />

    return step.completedStatus ? completed : notCompleted;
};

Completed.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    step: PropTypes.object,
    onToggleStep: PropTypes.func.isRequired
};
 
export default Completed;