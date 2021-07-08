import React from 'react';
import PropTypes from 'prop-types';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import { FaRegEdit } from 'react-icons/fa';
import { connect } from 'react-redux';

import DeleteModal from './DeleteModal';
import TitleRow from './SideTitleRow';

import { removeList } from '../actions/listsActions';
import { setList } from '../actions/currentActions';
import { removeTask } from '../actions/tasksActions';


const RightClickMenuSide = ({
    list,
    tasks,
    onClick = f => f,
    onClose = f => f,
    onEditClick = f => f,
    onRemoveList = f => f,
    onRemoveTask = f => f
}) => {
    const removeTasks = () => {
        const listTasks = tasks.filter(task => task.list_id === list.id);

        listTasks.forEach(task => onRemoveTask(task.task_id))
    }

    const onRemove = () => {
        removeTasks();
        onRemoveList(list.id);
    }

    return (
        <React.Fragment>
            <ContextMenuTrigger id={list.id}>
                <TitleRow
                    list={ list }
                    onClick={ onClick }
                    onClose={ onClose }
                />
            </ContextMenuTrigger>

            <ContextMenu id={list.id}>
                <MenuItem onClick={ onEditClick }>
                    <FaRegEdit className="list-icon" style={{margin: '0 5px 3px 0'}} />
                    <span>Rename list</span>
                </MenuItem>

                <MenuItem>
                    <DeleteModal
                        id={ list.id }
                        location={ 'side-rightclick' }
                        name={ list.name }
                        todo={ 'list'}
                        onClick={ onRemove }
                    />
                </MenuItem>
            </ContextMenu>
        </React.Fragment>
    )
};

RightClickMenuSide.propTypes = {
    list: PropTypes.any,
    tasks: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onRemoveList: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    onRemoveList(id) {
        dispatch(
            removeList(id)
        )

        dispatch(
            setList('0', 'My Day')
        )
    },

    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RightClickMenuSide);