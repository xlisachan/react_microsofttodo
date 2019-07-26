import React from 'react';
import PropTypes from 'prop-types';
import RightClickMenu from '../../../containers/Main/Body/RightClickMenu';
import AddItem from '../../../containers/Main/Body/AddItem';

const ListBody = ({query, tasks}) => {
    return (
        <div className="main-container">
            { tasks.map(task =>
                <RightClickMenu
                    key={ task.task_id }
                    id={ task.task_id }
                    task={ task }
                />
            )}

            { query ? null : <AddItem /> }
        </div>
    );
}

ListBody.propTypes = {
    tasks: PropTypes.array.isRequired,
    query: PropTypes.string
}

export default ListBody;