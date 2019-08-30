import React from 'react';
import PropTypes from 'prop-types';
import AddItem from '../../../containers/AddItem';

const ListBody = ({query, renderTasks=f=>f}) => {
    return (
        <div className="main-container">
            { renderTasks() }

            { query ? null : <AddItem addItem={'task'} placeholder={'Add Task'} /> }
        </div>
    );
}

ListBody.propTypes = {
    query: PropTypes.string,
    renderTasks: PropTypes.func.isRequired
}

export default ListBody;