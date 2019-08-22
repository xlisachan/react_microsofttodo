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
        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{color: 'royalblue'}}>
                <FaRegSun style={{fontSize: '1.5rem', margin: '0 15px 3px 0'}}/>
                Added to My Day 
            </div>
            
            <FaTimes style={{fontSize: '1.5rem', color: 'dimgray'}}/>
        </div>

    const renderAddMyDay = () =>
        <div style={{color: 'dimgray'}}>
            <FaRegSun style={{fontSize: '1.5rem', margin: '0 15px 3px 0'}}/>
            <span>Add to My Day</span>
        </div>

    return (
        <ListItem style={{margin: '10px 0'}} onClick={handleClick}>
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