import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTask } from '../../../../actions/currentActions';
import Task from './Task';

const TaskContainer = ({selectedTaskId, task, onClick=f=>f, onSetTask=f=>f}) => {
    const handleClick = () => {
        onSetTask(task.task_id, task.item, task.note, task.steps);
        onClick();
    }

    return ( 
        <Task 
            task={ task }
            selectedTaskId={ selectedTaskId }
            onClick={ handleClick }
        />
    );
};

TaskContainer.propTypes = {
    selectedTaskId: PropTypes.string,
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onSetTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"]
});

const mapDispatchToProps = dispatch => ({
    onSetTask(id, task, note, steps) {
        dispatch(
            setTask(id, task, note, steps)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);