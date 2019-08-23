import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import Step from '../../containers/MoreInfo/Step';
import AddItem from '../../containers/AddItem';

const Steps = ({selectedTaskId, tasks}) => {
    const selectedTask = tasks.filter(task => task.task_id === selectedTaskId);
    if (!selectedTask[0]) return null;

    const renderSteps = () => {
        if (selectedTask[0].steps.length === 0) return null;
        
        return (
            <List style={{padding: '0px 16px 0px 3px'}}>
                { selectedTask[0].steps.map(step =>
                    <Step key={`step_${step.id}`} step={ step } selectedTask={ selectedTask } />
                )}
            </List>
        )
    }

    return (
        <div>
            { renderSteps() }

            <AddItem addItem={'step'} placeholder={selectedTask[0].steps.length > 0 ? 'Next Step' : 'Add step'} />
        </div>
        
    );
}

Steps.propTypes = {
    selectedTaskId: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
}
 
export default Steps;