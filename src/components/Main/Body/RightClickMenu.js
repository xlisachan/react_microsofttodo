import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FaRegSun, FaCheckCircle, FaRegCheckCircle, FaStar, FaRegStar } from 'react-icons/fa';
import ListItem from '../../../containers/Main/Body/ListItem';
import DeleteModal from '../../DeleteModal';

const RightClickMenu = ({task, onClick=f=>f, onClose=f=>f, onToggleMyDay=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onRemoveTask=f=>f}) => {
    const renderRemoveMyDay = () =>
        <div>
            <FaRegSun style={{margin: '0 5px 3px 0'}}/>
            <span>Remove from My Day</span>
        </div>
    
    const renderAddMyDay = () =>
        <div>
            <FaRegSun style={{margin: '0 5px 3px 0'}}/>
            <span>Add to My Day</span>
        </div>

    const renderMarkNotCompleted = () => 
        <div>
            <FaRegCheckCircle style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as not completed</span>
        </div>

    const renderMarkCompleted = () =>
        <div>
            <FaCheckCircle style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as completed</span>
        </div>

    const renderRemoveImportance = () =>
        <div>
            <FaRegStar style={{margin: '0 5px 3px 0'}}/>
            <span>Remove importance</span>
        </div>
    
    const renderMarkImportant = () =>
        <div>
            <FaStar style={{margin: '0 5px 3px 0'}}/>
            <span>Mark as important</span>
        </div>
    
    const onRemove = () => {
        onRemoveTask(task.task_id);
        onClose();
    }
    
    return (
        <div>
            <ContextMenuTrigger id={`menuitem_${task.task_id}`}>
                <ListItem task={ task } onClick={ onClick } />
            </ContextMenuTrigger>

            <ContextMenu id={`menuitem_${task.task_id}`}>
                <MenuItem onClick={() => onToggleMyDay(task.task_id)}>
                    { task.my_day ? renderRemoveMyDay() : renderAddMyDay() }
                </MenuItem>

                <MenuItem onClick={() => onToggleComplete(task.task_id)}>
                    { task.completedStatus ? renderMarkNotCompleted() : renderMarkCompleted() }
                </MenuItem>
                
                <MenuItem onClick={() => onToggleImportant(task.task_id)}>
                    { task.importantStatus ? renderRemoveImportance() : renderMarkImportant() }
                </MenuItem>
                
                <MenuItem divider />

                <MenuItem>
                    <DeleteModal 
                        id={ task.task_id }
                        location={ 'main-rightclick' }
                        name={ task.item }
                        todo={ 'task' }
                        onClick={() => onRemove()}
                    />
                </MenuItem>

            </ContextMenu>
        </div>
    )
}

RightClickMenu.propTypes = {
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
}

export default RightClickMenu;