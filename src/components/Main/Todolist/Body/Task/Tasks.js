import React from 'react';
import PropTypes from 'prop-types';
import RightClickMenu from './RightClickMenu/RightClickMenu';

const Tasks = ({tasks, onClick=f=>f, onClose=f=>f}) => {
    const renderTasks = () =>
        tasks.map(task =>
            <RightClickMenu
                key={ task.task_id }
                task={ task }
                onClick={ onClick }
                onClose={ onClose }
            />
    )
    return renderTasks();
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};
 
export default Tasks;
