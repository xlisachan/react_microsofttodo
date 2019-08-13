import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';
import Moment from 'react-moment';
import DeleteModal from '../DeleteModal';

const BottomSection = ({selectedTaskId, tasks, onCloseMore=f=>f}) => {
    const selectedTask = tasks.filter(task => task.task_id === selectedTaskId);

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

    const bottomText = () => {
        return selectedTask[0].completedStatus ?
            <span style={{fontSize: '.75rem'}}>
                Completed {' '}
                <Moment
                    date={selectedTask[0].date_completed}
                    parse="YYYY-MM-DD"
                    format="ddd, MMM D"
                />
            </span>
            :
            <span style={{fontSize: '.75rem'}}>
                Created {' '}
                <Moment
                    date={selectedTask[0].date_created}
                    parse="YYYY-MM-DD"
                    format="ddd, MMM D"
                />
            </span>
    }

    return (
        <ListItem style={ bottomStyle() }>
            <FaChevronRight onClick={()=> onCloseMore()} />

            { bottomText() }

            <DeleteModal 
                more= { true }
                todo={ 'task' }
                item={ selectedTask[0].item }
                name={ selectedTask[0].item }
                id={ selectedTask[0].task_id }
                onClick={() => console.log(selectedTask[0].task_id)}
            />
        </ListItem>
    );
}

BottomSection.propTypes = {
    selectedTaskId: PropTypes.string,
    tasks: PropTypes.array,
    onCloseMore: PropTypes.func.isRequired
}
 
export default BottomSection;