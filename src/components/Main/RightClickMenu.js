import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ListItem from '../../containers/Main/ListItem';
import { FaRegTrashAlt } from 'react-icons/fa';

const myApp = props =>
    <div>
        <ContextMenuTrigger id={`menuitem_ + ${props.task.task_id}`}>
            <ListItem 
                id={ props.task.task_id}
                task={ props.task }                            
            />
        </ContextMenuTrigger>

        <ContextMenu id={`menuitem_ + ${props.task.task_id}`}>
            <MenuItem
                onClick={() => props.onRemoveTask(props.task.task_id)}>
                
                <FaRegTrashAlt style={{margin: '0 5px 3px 0'}}/>
                Delete task

            </MenuItem>
        </ContextMenu>
    </div>

export default myApp;