import React from 'react';
import PropTypes from 'prop-types';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const MoreMyDay = ({currentList, currentTask, tasks, onClose=f=>f, onToggleMyDay=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === currentTask.id);
    if (!selectedTask[0]) return null;

    const handleClick = () => {
        if (currentList === "My Day"){
            onClose();
        }
        onToggleMyDay(currentTask.id);
    }

    const renderRemoveMyDay = () => 
        <div className="align-center space-between">
            <div className="blue">
                <FaRegSun className="list-icon list-icon-left"/>
                Added to My Day 
            </div>
            
            <FaTimes className="list-icon" style={{color: 'dimgray'}}/>
        </div>

    const renderAddMyDay = () =>
        <div style={{color: 'dimgray'}}>
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
    currentTask: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired
}
 
export default MoreMyDay;