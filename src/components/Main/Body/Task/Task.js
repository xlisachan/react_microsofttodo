import React from 'react';
import PropTypes from 'prop-types';
import Completed from './Status/Completed';
import Important from './Status/Important';
import Item from './Item';

const Task = ({selectedTaskId, task, onClick=f=>f}) => {
    const listStyle = id => {
        return {
            borderRadius: id === selectedTaskId ? 10 : null,
            backgroundColor: id === selectedTaskId ? '#eee' : null
        }
    };

    return ( 
        <div className="list-item align-center space-between" style={ listStyle(task.task_id) } onClick={ onClick }>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Completed task={task} />

                <Item task={task} />
            </div>

            <Important task={task} />
        </div>
    );
};

Task.propTypes = {
    selectedTaskId: PropTypes.string,
    task: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Task;