import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FaRegEdit } from 'react-icons/fa';
import TitleRow from '../../containers/Side/TitleRow';
import DeleteModal from '../DeleteModal';

const RightClickMenuSide = ({list, tasks, onClick=f=>f, onClose=f=>f, onEditClick=f=>f, onRemoveList=f=>f, onRemoveTask=f=>f}) => {

    const renderRenameList = () =>
        <MenuItem onClick={() => onEditClick()}>
            <FaRegEdit style={{margin: '0 5px 3px 0'}} />
            <span>Rename list</span>
        </MenuItem>
    
    const removeTasks = () => {
        const listTasks = tasks.filter(task => task.list_id === list.id);

        listTasks.forEach(task => 
            onRemoveTask(task.task_id))
    }

    const removeAll = () => {
        removeTasks();
        onRemoveList(list.id);
    }

    const renderRemoveList = () =>
        <MenuItem>
            <DeleteModal
                id={ list.id }
                location={ 'side-rightclick' }
                name={ list.name }
                todo={ 'list'}
                onClick={() => removeAll()}
            />
        </MenuItem>

    return (
        <div>
            <ContextMenuTrigger id={list.id}>
                <TitleRow
                    list={ list }
                    onClick={ onClick }
                    onClose={ onClose }
                />
            </ContextMenuTrigger>

            <ContextMenu id={list.id}>
                { renderRenameList() }

                { renderRemoveList() }
            </ContextMenu>
        </div>
    );
}

RightClickMenuSide.propTypes = {
    list: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    onRemoveList: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
}

export default RightClickMenuSide;