import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeDateDue } from '../../../../actions/tasksActions';
import PlannedButton from './PlannedButton';

const PlannedButtonContainer = ({selectedTask, onClick=f=>f, onRemoveDateDue=f=>f}) => {
    if (!selectedTask[0]) return null;

    return (
        <PlannedButton 
            selectedTask={ selectedTask }
            onClick={ onClick }
            onRemoveDateDue={ onRemoveDateDue }
        />
    )
};

PlannedButtonContainer.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemoveDateDue: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onRemoveDateDue(id) {
        dispatch(
            removeDateDue(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(PlannedButtonContainer);