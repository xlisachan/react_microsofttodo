import React from 'react';
import PropTypes from 'prop-types';
import RightClickMenu from '../../containers/Main/RightClickMenu';
import AddItem from '../../containers/Main/AddItem';

const ListBody = ({tasks, listTitle}) => {
    const filteredTasks = tasks.filter(task =>
        task[`${ listTitle.toLowerCase().replace(/ /g,"_") }`]
    )

    return (
        <div className="main-container">
            { filteredTasks.map(task =>
                <RightClickMenu 
                    key={ task.task_id }
                    id={ task.task_id }
                    task={ task }
                />
            )}

            <AddItem />
        </div>
    );
}

ListBody.propTypes = {
    tasks: PropTypes.array.isRequired,
    listTitle: PropTypes.string.isRequired
}

export default ListBody;