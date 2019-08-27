import React from 'react';
import PropTypes from 'prop-types';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const MoreMyDay = ({currentList, selectedTask, onClose=f=>f, onToggleMyDay=f=>f}) => {
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day"){
            onClose();
        }
        onToggleMyDay(selectedTask[0].task_id);
    }

    const renderRemoveMyDay = () => 
        <div className="align-center space-between">
            <div className="align-center blue">
                <FaRegSun className="list-icon list-icon-left"/>
                Added to My Day 
            </div>
            
            <FaTimes style={{color: 'dimgray'}}/>
        </div>

    const renderAddMyDay = () =>
        <div className="align-center" style={{color: 'dimgray'}}>
            <FaRegSun className="list-icon list-icon-left" />
            <span>Add to My Day</span>
        </div>

    return (
        <ListItem style={{margin: '10px 3px'}} onClick={handleClick}>
            { selectedTask[0].my_day ? renderRemoveMyDay() : renderAddMyDay() }
        </ListItem>
    );
}

MoreMyDay.propTypes = {
    currentList: PropTypes.string.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired
}
 
export default MoreMyDay;