import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import ListItem from '../../../containers/Main/Body/ListItem';
import DeleteModal from '../../DeleteModal';

const RightClickMenu = ({task, renderStatus, onClick=f=>f, onRemove=f=>f}) => {
    return (
        <div>
            <ContextMenuTrigger id={`menuitem_${task.task_id}`}>
                <ListItem task={ task } onClick={ onClick } />
            </ContextMenuTrigger>

            <ContextMenu id={`menuitem_${task.task_id}`}>
                <MenuItem>
                    { task.my_day ? renderStatus.removeMyDay : renderStatus.addMyDay }
                </MenuItem>

                <MenuItem>
                    { task.completedStatus ? renderStatus.markNotCompleted : renderStatus.markCompleted }
                </MenuItem>
                
                <MenuItem>
                    { task.importantStatus ? renderStatus.removeImportance : renderStatus.markImportant }
                </MenuItem>
                
                <MenuItem divider />

                <MenuItem>
                    <DeleteModal 
                        id={ task.task_id }
                        location={ 'main-rightclick' }
                        name={ task.item }
                        todo={ 'task' }
                        onClick={ onRemove }
                    />
                </MenuItem>

            </ContextMenu>
        </div>
    )
}

RightClickMenu.propTypes = {
    task: PropTypes.object.isRequired,
    renderStatus: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default RightClickMenu;