import React from 'react';
import PropTypes from 'prop-types';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';

import { toggleMyDay } from '../actions/tasksActions';

const MoreInfoMyDay = ({
    currentList,
    selectedTask,
    onClose = f => f,
    onToggleMyDay = f => f
}) => {
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day") {
            onClose();
        }
        onToggleMyDay(selectedTask[0].task_id);
    };
    
    return (
        <ListItem className="moreinfo-body-list-item" onClick={ handleClick }>
            {selectedTask[0].my_day ? (
                <div className="align-center space-between">
                    <div className="align-center blue">
                        <FaRegSun className="list-icon list-icon-left"/>
                        Added to My Day 
                    </div>
                    
                    <FaTimes className="dimgray" />
                </div>
            ) : (
                <div className="align-center dimgray">
                    <FaRegSun className="list-icon list-icon-left" />
                    <span>Add to My Day</span>
                </div>
            )}
        </ListItem>
    );
};

MoreInfoMyDay.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoMyDay);
