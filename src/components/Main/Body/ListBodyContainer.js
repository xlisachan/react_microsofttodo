import React from 'react';
import { connect } from 'react-redux';
import RightClickMenu from './RightClickMenuContainer';
import ListBody from './ListBody';

const ListBodyContainer = ({query, tasks, onClick=f=>f, onClose=f=>f}) => {
    const renderTasks = () =>
        tasks.map(task =>
            <RightClickMenu
                key={ task.task_id }
                task={ task }
                onClick={ onClick }
                onClose={ onClose }
            />
        )

    return (
        <ListBody query={ query } renderTasks={ renderTasks } />
    );
}

const mapStateToProps = state => ({
    query: state.query
})

export default connect(mapStateToProps)(ListBodyContainer);