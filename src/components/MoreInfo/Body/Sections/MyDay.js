import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMyDay } from '../../../../actions/tasksActions';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const MyDay = ({currentList, selectedTask, onClose=f=>f, onToggleMyDay=f=>f}) => {
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day") {
            onClose();
        }
        onToggleMyDay(selectedTask[0].task_id);
    };

    const removeMyDay = 
        <div className="align-center space-between">
            <div className="align-center blue">
                <FaRegSun className="list-icon list-icon-left"/>
                Added to My Day 
            </div>
            
            <FaTimes style={{color: 'dimgray'}}/>
        </div>

    const addMyDay =
        <div className="align-center" style={{color: 'dimgray'}}>
            <FaRegSun className="list-icon list-icon-left" />
            <span>Add to My Day</span>
        </div>
    
    return (
        <ListItem style={{margin: '10px 0px'}} onClick={ handleClick }>
            { selectedTask[0].my_day ? removeMyDay : addMyDay }
        </ListItem>
    );
};

MyDay.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MyDay);