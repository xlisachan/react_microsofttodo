import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';
import Moment from 'react-moment';
import DeleteModal from '../DeleteModal';

const BottomSection = ({selectedTaskId, tasks, onClose=f=>f, onRemoveTask=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === selectedTaskId);
    if (!selectedTask[0]) return null;

    const bottomStyle = () => {
        return {
            width: '95%',
            padding: '0 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'fixed',
            bottom: 10
        }
    }  

    const renderCompleted = () =>
        <span style={{fontSize: '.75rem'}}>
            Completed {' '}
            <Moment
                date={selectedTask[0].date_completed}
                parse="YYYY-MM-DD"
                format="ddd, MMM D"
            />
        </span>
    
    const renderCreated = () =>
        <span style={{fontSize: '.75rem'}}>
            Created {' '}
            <Moment
                date={selectedTask[0].date_created}
                parse="YYYY-MM-DD"
                format="ddd, MMM D"
            />
        </span>

    return (
        <ListItem style={ bottomStyle() }>
            <FaChevronRight onClick={()=> onClose()} />

            { selectedTask[0].completedStatus ?  renderCompleted() : renderCreated() }

            <DeleteModal 
                id={ selectedTask[0].task_id }
                location= { 'more-bottom' }
                name={ selectedTask[0].item }
                todo={ 'task' }
                onClick={() => onRemoveTask(selectedTask[0].task_id)}
            />
        </ListItem>
    );
}

BottomSection.propTypes = {
    selectedTaskId: PropTypes.string,
    tasks: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
}
 
export default BottomSection;