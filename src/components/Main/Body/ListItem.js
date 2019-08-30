import React from 'react';
import PropTypes from 'prop-types';
import ListDetails from '../../../containers/Main/Body/ListDetails';

const ListItem = ({renderStatus, task, listStyle=f=>f, listItem=f=>f, onClick=f=>f}) => {
    return ( 
        <div className="list-item align-center space-between" style={ listStyle(task.task_id) } onClick={ onClick }>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <span>
                    { task.completedStatus ? renderStatus.completed : renderStatus.notCompleted}
                </span>

                <span>
                    <div style={ listItem() }>
                        { task.item }
                    </div>

                    <ListDetails task={ task } />
                </span>
            </div>

            <span>
                { task.importantStatus ? renderStatus.important : renderStatus.notImportant }
            </span>
        </div>
    );
}

ListItem.propTypes = {
    renderStatus: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    listStyle: PropTypes.func.isRequired,
    listItem: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
}

export default ListItem;