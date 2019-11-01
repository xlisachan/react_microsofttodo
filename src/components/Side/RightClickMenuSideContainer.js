import React from 'react';
import { connect } from 'react-redux';
import { removeList } from '../../actions/listsActions';
import { setList } from '../../actions/currentActions';
import { removeTask } from '../../actions/tasksActions';
import RightClickMenuSide from './RightClickMenuSide';

const RightClickMenuSideContainer = ({list, tasks, onClick=f=>f, onClose=f=>f, onEditClick=f=>f, onRemoveList=f=>f, onRemoveTask=f=>f}) => {
    const removeTasks = () => {
        const listTasks = tasks.filter(task => task.list_id === list.id);

        listTasks.forEach(task => onRemoveTask(task.task_id))
    }

    const removeAll = () => {
        removeTasks();
        onRemoveList(list.id);
    }

    return (
        <RightClickMenuSide
            list={ list }
            onClick={ onClick }
            onClose={ onClose }
            onEditClick={ onEditClick }
            onRemove={ removeAll }
        />
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks
})

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

})

export default connect(mapStateToProps, mapDispatchToProps)(RightClickMenuSideContainer);