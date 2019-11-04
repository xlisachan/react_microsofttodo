import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask } from '../../../actions/tasksActions';
import FooterSection from './FooterSection';

const FooterSectionContainer = ({selectedTask, onClose=f=>f, onRemoveTask=f=>f}) => {
    if (!selectedTask[0]) return null;

    const onRemove = (id) => {
        onRemoveTask(id);
        onClose();
    }

    return (
        <FooterSection 
            selectedTask={ selectedTask }
            onClose={ onClose }
            onRemove={ onRemove }
        />
    )
};

FooterSectionContainer.propTypes = {
    selectedTask: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(FooterSectionContainer);