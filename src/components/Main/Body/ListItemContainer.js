import React from 'react';
import { connect } from 'react-redux';
import { setTask } from '../../../actions/currentActions';
import { toggleCompleted, toggleImportant } from '../../../actions/tasksActions'; 
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';
import ListItem from './ListItem';

const ListItemContainer = ({selectedTaskId, task, onClick=f=>f, onSetTask=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f}) => {
    const listStyle = id => {
        return {
            borderRadius: id === selectedTaskId ? 10 : null,
            backgroundColor: id === selectedTaskId ? '#eee' : null
        }
    }

    const listItem = () => {
        return {
            color: task.completedStatus ? 'dimgray' : 'black',
            textDecoration: task.completedStatus ? 'line-through' : 'none'
        }
    }

    const handleClick = () => {
        onSetTask(task.task_id, task.item, task.note, task.steps);
        onClick();
    }

    const completed =
        <FaCheckCircle className="list-icon green list-icon-margin-rt" onClick={() => onToggleComplete(task.task_id)} />
    
    const notCompleted =
        <FaRegCircle className="list-icon list-icon-margin-rt gray" onClick={() => onToggleComplete(task.task_id)} />

    const important =
        <FaStar className="list-icon blue" onClick={() => onToggleImportant(task.task_id)} />
    
    const notImportant =
        <FaRegStar className="list-icon gray" onClick={() => onToggleImportant(task.task_id)} />

    const renderStatus = {
        completed,
        notCompleted,
        important,
        notImportant
    }

    return ( 
        <ListItem 
            renderStatus={ renderStatus }
            task={ task }
            listStyle={ listStyle }
            listItem={ listItem }
            onClick={ handleClick }
        />
    );
}

const mapStateToProps = state => ({
    selectedTaskId: state.current.task["id"]
})

const mapDispatchToProps = dispatch => ({
    
    onToggleComplete(id) {
        dispatch(
            toggleCompleted(id)
        )
    },

    onToggleImportant(id) {
        dispatch(
            toggleImportant(id)
        )
    },

    onSetTask(id, task, note, steps) {

        dispatch(
            setTask(id, task, note, steps)
        )

    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ListItemContainer);