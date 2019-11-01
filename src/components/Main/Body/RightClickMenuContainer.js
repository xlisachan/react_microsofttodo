import React from 'react';
import { connect } from 'react-redux';
import { toggleMyDay, toggleCompleted, toggleImportant, removeTask } from '../../../actions/tasksActions'; 
import { FaRegSun, FaCheckCircle, FaRegCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import RightClickMenu from './RightClickMenu';

const RightClickMenuContainer = ({task, onClick=f=>f, onClose=f=>f, onToggleMyDay=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onRemoveTask=f=>f}) => {
    const removeMyDay =
        <div onClick={() => onToggleMyDay(task.task_id)}>
            <FaRegSun className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Remove from My Day</span>
        </div>
    
    const addMyDay =
        <div onClick={() => onToggleMyDay(task.task_id)}>
            <FaRegSun className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Add to My Day</span>
        </div>

    const markNotCompleted =
        <div onClick={() => onToggleComplete(task.task_id)}>
            <FaRegCheckCircle className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as not completed</span>
        </div>

    const markCompleted =
        <div onClick={() => onToggleComplete(task.task_id)}>
            <FaCheckCircle className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as completed</span>
        </div>

    const removeImportance =
        <div onClick={() => onToggleImportant(task.task_id)}>
            <FaRegStar className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Remove importance</span>
        </div>
    
    const markImportant =
        <div onClick={() => onToggleImportant(task.task_id)}>
            <FaStar className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as important</span>
        </div>
    
    const renderStatus = {
        addMyDay,
        markCompleted,
        markImportant,
        markNotCompleted,
        removeImportance,
        removeMyDay
    }

    const handleRemove = () => {
        onRemoveTask(task.task_id);
        onClose();
    }
    
    return (
        <RightClickMenu 
            task={ task }
            renderStatus={ renderStatus }
            onClick={ onClick }
            onRemove={ handleRemove }
        />
    )
}

const mapDispatchToProps = dispatch => ({
    
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    },

    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },
    
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }

})

export default connect(null, mapDispatchToProps)(RightClickMenuContainer);