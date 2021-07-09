import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task';
import AddItem from '../../AddItem';

const Body = ({ query, tasks, onClick = f => f, onClose = f => f }) => (
    <div className="main-container">
        {tasks.map(task =>
            <Task
                key={task.task_id}
                task={task}
                onClick={onClick}
                onClose={onClose}
            />
        )}

        {query ?
            null
            :
            <AddItem
                addItem={'task'}
                placeholder={'Add Task'}
            />
        }
    </div>
);

Body.propTypes = {
    query: PropTypes.string,
    tasks: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    query: state.query
});

export default connect(mapStateToProps)(Body);