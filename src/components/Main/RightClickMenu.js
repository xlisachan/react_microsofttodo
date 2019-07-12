import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ListItem from '../../containers/Main/ListItem';
import { FaRegSun, FaCheckCircle, FaRegCheckCircle, FaStar, FaRegStar, FaRegTrashAlt } from 'react-icons/fa';

const RightClickMenu = ({task, onToggleMyDay=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f, onRemoveTask=f=>f}) => {
    const switchMyDay = () =>
        <MenuItem onClick={() => onToggleMyDay(task.task_id)}>
            { task.my_day ?
                <div>
                    <FaRegSun style={{margin: '0 5px 3px 0'}}/>
                    <span>Remove from My Day</span>
                </div>
                :
                <div>
                    <FaRegSun style={{margin: '0 5px 3px 0'}}/>
                    <span>Add to My Day</span>
                </div>
            }
        </MenuItem>

    const switchComplete = () => 
        <MenuItem onClick={() => onToggleComplete(task.task_id)}>
            { task.completedStatus ?
                <div>
                    <FaRegCheckCircle style={{margin: '0 5px 3px 0'}}/>
                    <span>Mark as not completed</span>
                </div>
                :
                <div>
                    <FaCheckCircle style={{margin: '0 5px 3px 0'}}/>
                    <span>Mark as completed</span>
                </div>
            }
        </MenuItem>

    const switchImportant = () =>
        <MenuItem onClick={() => onToggleImportant(task.task_id)}>
            { task.importantStatus ?
                <div>
                    <FaRegStar style={{margin: '0 5px 3px 0'}}/>
                    <span>Remove importance</span>
                </div>
                :
                <div>
                    <FaStar style={{margin: '0 5px 3px 0'}}/>
                    <span>Mark as important</span>
                </div>
            }
        </MenuItem>
    
    const removeTask = () =>
        <MenuItem onClick={() => onRemoveTask(task.task_id)}>
            <FaRegTrashAlt style={{margin: '0 5px 3px 0'}} />
            <span>Delete task</span>
        </MenuItem>

    return (
        <div>
            <ContextMenuTrigger id={`menuitem_ + ${task.task_id}`}>
                <ListItem
                    id={ task.task_id}
                    task={ task }
                />
            </ContextMenuTrigger>

            <ContextMenu id={`menuitem_ + ${task.task_id}`}>
                { switchMyDay() }

                { switchComplete() }
                
                { switchImportant() }

                <MenuItem divider />

                { removeTask() }
            </ContextMenu>
        </div>
    )
}

RightClickMenu.propTypes = {
    task: PropTypes.object.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onToggleMyDay: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
}

export default RightClickMenu;