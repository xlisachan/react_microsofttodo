import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ListItem from '../../containers/Main/ListItem';
import { FaRegSun, FaCheckCircle, FaRegCheckCircle, FaStar, FaRegStar, FaRegTrashAlt } from 'react-icons/fa';

class RightClickMenu extends Component {
    switchMyDay = () =>
        <MenuItem onClick={() => this.props.onToggleMyDay(this.props.task.task_id)}>
            { this.props.task.my_day ?
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

    switchComplete = () => 
        <MenuItem onClick={() => this.props.onToggleComplete(this.props.task.task_id)}>
            { this.props.task.completedStatus ?
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

    switchImportant = () =>
        <MenuItem onClick={() => this.props.onToggleImportant(this.props.task.task_id)}>
            { this.props.task.importantStatus ?
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
    
    removeTask = () =>
        <MenuItem onClick={() => this.props.onRemoveTask(this.props.task.task_id)}>
            <FaRegTrashAlt style={{margin: '0 5px 3px 0'}} />
            <span>Delete task</span>
        </MenuItem>

    render() {
        const { task } = this.props;
        return(
            <div>
                <ContextMenuTrigger id={`menuitem_ + ${task.task_id}`}>
                    <ListItem
                        id={ task.task_id}
                        task={ task }                            
                    />
                </ContextMenuTrigger>

                <ContextMenu id={`menuitem_ + ${task.task_id}`}>
                    { this.switchMyDay() }

                    { this.switchComplete() }
                    
                    { this.switchImportant() }

                    <MenuItem divider />

                    { this.removeTask() }
                </ContextMenu>
            </div>
        )
    }
}

export default RightClickMenu;