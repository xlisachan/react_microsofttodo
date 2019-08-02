import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import TitleRow from '../../containers/Side/TitleRow';
import DeleteModal from '../DeleteModal';

const RightClickMenuSide = ({list, tasks, onClick=f=>f, onRemoveList=f=>f, onRemoveTask=f=>f}) => {
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
                todo={ 'list '}
                item={ list }
                name={ list.name }
                id={ list.id }
                onClick={() => removeAll()}
            />
        </MenuItem>

    return (
        <div>
            <ContextMenuTrigger id={list.id}>
                <TitleRow
                    list={ list }
                    onClick={ onClick }
                />
            </ContextMenuTrigger>

            <ContextMenu id={list.id}>
               { renderRemoveList() }
            </ContextMenu>
        </div>
    );
}

RightClickMenuSide.propTypes = {
    list: PropTypes.any,
    onClick: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    onRemoveList: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
}

export default RightClickMenuSide;