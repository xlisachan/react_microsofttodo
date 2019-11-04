import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask } from '../../../../../actions/tasksActions'; 
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import TaskContainer from '../TaskContainer';
import DeleteModal from '../../../../DeleteModal';
import MarkMyDay from '../MenuItem/MarkMyDay';
import MarkCompleted from '../MenuItem/MarkCompleted';
import MarkImportant from '../MenuItem/MarkImportant';

const RightClickMenu = ({task, onClick=f=>f, onClose=f=>f, onRemoveTask=f=>f}) => {
    const handleRemove = () => {
        onRemoveTask(task.task_id);
        onClose();
    }

    return (
        <div>
            <ContextMenuTrigger id={`menuitem_${task.task_id}`}>
                <TaskContainer task={ task } onClick={ onClick } />
            </ContextMenuTrigger>

            <ContextMenu id={`menuitem_${task.task_id}`}>
                <MarkMyDay task={task} />

                <MarkCompleted task={task} />
                
                <MarkImportant task={task} />
                
                <MenuItem divider />

                <MenuItem>
                    <DeleteModal 
                        id={ task.task_id }
                        location={ 'main-rightclick' }
                        name={ task.item }
                        todo={ 'task' }
                        onClick={ handleRemove }
                    />
                </MenuItem>
            </ContextMenu>
        </div>
    )
};

RightClickMenu.propTypes = {
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(RightClickMenu);