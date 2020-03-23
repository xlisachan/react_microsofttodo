import React from 'react';
import PropTypes from 'prop-types';
import Steps from './Steps';
import AddItem from '../../../common/AddItemContainer';

const StepsContainer = ({selectedTask}) => {
    if (!selectedTask[0]) return null;
    
    return (
        <div>
            <Steps selectedTask={selectedTask} />

            <AddItem addItem={'step'} placeholder={selectedTask[0].steps.length > 0 ? 'Next Step' : 'Add step'} />
        </div>
        
    );
};

StepsContainer.propTypes = {
    selectedTask: PropTypes.array.isRequired
};
 
export default StepsContainer;