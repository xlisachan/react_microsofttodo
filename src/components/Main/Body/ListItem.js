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

    const handleClick = () => {
        onSetTask(task.task_id, task.item, task.steps);
        onClick();
    }

    const renderCompleted = () =>
        <FaCheckCircle style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}} />
    
    const renderNotCompleted = () =>
        <FaRegCircle style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}} />

    const renderImportant = () =>
        <FaStar style={{fontSize: '1.5rem', color: 'royalblue'}} />
    
    const renderNotImportant = () =>
        <FaRegStar style={{fontSize: '1.5rem', color: 'gray'}} />

    return ( 
        <div className="list-item" style={ listStyle(task.task_id) } onClick={() => handleClick()}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span onClick={() => onToggleComplete(task.task_id)}>
                    { task.completedStatus ? renderCompleted() : renderNotCompleted()}
                </span>

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

            <span onClick={() => onToggleImportant(task.task_id)}>
                { task.importantStatus ? renderImportant() : renderNotImportant() }
            </span>
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