import React from 'react';
import PropTypes from 'prop-types';
import RightClickMenu from '../../../containers/Main/Body/RightClickMenu';
import AddItem from '../../../containers/Main/Body/AddItem';

const ListBody = ({query, tasks}) => {
    const renderTasks = () =>
        tasks.map(task =>
            <RightClickMenu
                key={ task.task_id }
                task={ task }
            />
        )

    return (
        <div className="main-container">
            { renderTasks() }

            { query ? null : <AddItem /> }
        </div>
    );
}

ListBody.propTypes = {
    tasks: PropTypes.array.isRequired,
    query: PropTypes.string
}

export default ListBody;