import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTask } from '../../../actions/currentActions'; 
import { updateTask } from '../../../actions/tasksActions';
import HeaderSection from './HeaderSection';

const HeaderSectionContainer = ({currentTask, selectedTask, onSetTask=f=>f, onUpdateTask=f=>f}) => {
    if (!selectedTask[0]) return null;

    const onSubmit = e => {
        e.preventDefault();

        if (currentTask.task === '') {
            let subTask = selectedTask[0].item;
            onUpdateTask(currentTask.id, subTask, selectedTask[0].note, selectedTask[0].steps);
        } else {
            onUpdateTask(currentTask.id, currentTask.task, selectedTask[0].note, selectedTask[0].steps);
        }
    }

    const onEnterPress = e => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();
            onSubmit(e);
        }
    }

    return (
        <HeaderSection
            currentTask={ currentTask }
            selectedTask={ selectedTask }
            onEnterPress={ onEnterPress }
            onSetTask={ onSetTask }
            onSubmit={ onSubmit }
        />
    );
};

HeaderSectionContainer.propTypes = {
    currentTask: PropTypes.object,
    selectedTask: PropTypes.array,
    onSetTask: PropTypes.func.isRequired,
    onUpdateTask: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    onSetTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )
    },

    onUpdateTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )

        dispatch(
            updateTask(id, task)
        )
    }
});

export default connect(null, mapDispatchToProps)(HeaderSectionContainer);