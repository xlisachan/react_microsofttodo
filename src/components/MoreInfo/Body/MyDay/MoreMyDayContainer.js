import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMyDay } from '../../../../actions/tasksActions';
import MoreMyDay from './MoreMyDay';

const MoreMyDayContainer = ({currentList, selectedTask, onClose=f=>f, onToggleMyDay=f=>f}) => {
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day"){
            onClose();
        }
        onToggleMyDay(selectedTask[0].task_id);
    }

    return <MoreMyDay selectedTask={selectedTask} onClick={handleClick} />;
};

MoreMyDayContainer.propTypes = {
    currentList: PropTypes.string.isRequired,
    selectedTask: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    currentList: state.current.list["title"],
});

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreMyDayContainer);