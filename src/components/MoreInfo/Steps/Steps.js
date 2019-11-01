import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import Step from './StepContainer';
import AddItem from '../../AddItemContainer';

const Steps = ({selectedTask}) => {
    if (!selectedTask[0]) return null;
    
    const renderSteps = () => {
        if (selectedTask[0].steps.length === 0) return null;
        
        return (
            <List>
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
    selectedTask: PropTypes.array.isRequired
}
 
export default Steps;