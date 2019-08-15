import React from 'react';
import PropTypes from 'prop-types';
import ListItemMUI from '@material-ui/core/ListItem';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar, FaRegSun, FaRegCalendar } from 'react-icons/fa';
import { getCurrentDate } from '../../../getDate';
import Moment from 'react-moment';

const ListItem = ({task, lists, selectedListId, selectedTaskId, onSetTask=f=>f, onToggleComplete=f=>f, onToggleImportant=f=>f}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const listStyle = id => {
        return {
            width: '100%',
            height: 60,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderBottom: '1px solid gainsboro',
            borderRadius: id === selectedTaskId ? 10 : null,
            backgroundColor: id === selectedTaskId ? '#eee' : null
        }
    }

    const listItem = () => {
        return {
            color: task.completedStatus ? 'dimgray' : 'black',
            textDecoration: task.completedStatus ? 'line-through' : 'none'
        }
    }

    const listItemDetail = () => {
        return {
            fontSize: '.8rem',
            color: task.completedStatus ? 'darkgray' : 'dimgray'
        }
    }

    const renderCompleted = () => {
        return task.completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}}
                onClick={() => onToggleComplete(task.task_id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}}
                onClick={() => onToggleComplete(task.task_id)}
            />
    }

    const renderImportant = () => {
        return task.importantStatus ? 
            <FaStar 
                style={{fontSize: '1.5rem', color: 'royalblue'}}
                onClick={() => onToggleImportant(task.task_id)}
            />
            :
            <FaRegStar
                style={{fontSize: '1.5rem', color: 'gray'}}
                onClick={() => onToggleImportant(task.task_id)}
            />
    }

    const plannedDate = () =>
        <span style={{
                display: task.date_due ? 'inline' : 'none', 
                color: task.date_due <= getCurrentDate() ? 'crimson' : null
            }}>

            <FaRegCalendar style={{margin: '0px 3px 2px 0px'}} /> 
            <Moment
                date={ task.date_due }
                parse="YYYY-MM-DD"
                format="ddd, MMM D"
            />
        </span>

    return ( 
        <ListItemMUI button
            style={ listStyle(task.task_id) }
            onClick={() => onSetTask(task.task_id, task.item)}
            >
            <div style={{display: 'flex', alignItems: 'center'}}>
                { renderCompleted() }

                <span>
                    <div style={ listItem() }>
                        { task.item }
                    </div>

                    <div style={ listItemDetail() }>
                        <span style={{color: 'royalblue', display: name !== "My Day" && task.my_day === true ? 'inline' : 'none'}}>
                            <FaRegSun style={{fontSize: '.9rem'}} /> My Day
                        </span>

                        <span style={{display: (name !== "My Day" && name !== "Tasks" && task.tasks && task.my_day) ? 'inline' : 'none'}}>
                            {'  '} &middot; {'  '}
                        </span>

                        <span style={{display: name !== "Tasks" && task.tasks ? 'inline' : 'none'}}>
                            Tasks
                        </span>
                        
                        <span style={{display: (name !== "Tasks" && task.tasks && task.date_due) ? 'inline' : 'none' }}>
                            {'  '} &middot; {'  '}
                        </span>

                        <span style={{ display: (name === "Tasks" && task.date_due && task.my_day) ? 'inline' : 'none' }}>
                            {'  '} &middot; {'  '}
                        </span>

                        { plannedDate() }
                    </div>
                </span>
            </div>

            <div>
                { renderImportant() }
            </div>
        </ListItemMUI>
    );
}

ListItem.propTypes = {
    lists: PropTypes.array.isRequired,
    selectedListId: PropTypes.string.isRequired,
    selectedTaskId: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired,
    onSetTask: PropTypes.func.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired
}

export default ListItem;