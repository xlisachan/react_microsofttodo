import React from 'react';
import PropTypes from 'prop-types';
import ListDetails from './ListDetails';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';

const ListItem = ({lists, selectedListId, selectedTaskId, task, onClick=f=>f, onSetTask=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f}) => {

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

    const renderCompleted = () => {
        return task.completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}}
                onClick={() => onToggleComplete(task.task_id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}}
                onClick={() => onToggleComplete(task.task_id)}
            />
    }

    const renderImportant = () => {
        return task.importantStatus ? 
            <FaStar 
                style={{fontSize: '1.5rem', color: 'royalblue'}}
                onClick={() => onToggleImportant(task.task_id)}
            />
            :
            <FaRegStar
                style={{fontSize: '1.5rem', color: 'gray'}}
                onClick={() => onToggleImportant(task.task_id)}
            />
    }

    const handleClick = () => {
        onSetTask(task.task_id, task.item, task.steps);
        onClick();
    }

    return ( 
        <div className="list-item" style={ listStyle(task.task_id) } onClick={() => handleClick()}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                { renderCompleted() }

                <span>
                    <div style={ listItem() }>
                        { task.item }
                    </div>

                    <ListDetails
                        lists={ lists }
                        selectedListId={ selectedListId }
                        task={ task }
                    />
                </span>
            </div>

            <div>
                { renderImportant() }
            </div>
        </div>
    );
}

ListItem.propTypes = {
    lists: PropTypes.array.isRequired,
    selectedListId: PropTypes.string.isRequired,
    selectedTaskId: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired
}

export default ListItem;