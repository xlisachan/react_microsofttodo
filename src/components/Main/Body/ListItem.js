import React from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar, FaRegSun, FaRegCalendar } from 'react-icons/fa';
import { numFormat, getCurrentDateObj } from '../../../getDate';

const ListItem = ({task, listTitle, onToggleComplete=f=>f, onToggleImportant=f=>f}) => {
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
                display: task.date_due_display ? 'inline' : 'none', 
                color: task.date_due <= numFormat(getCurrentDateObj()) ? 'crimson' : null
            }}>

            <FaRegCalendar /> { task.date_due_display }
        </span>

    return ( 
        <div className="list-item">
            <div style={{display: 'flex', alignItems: 'center'}}>
                { renderCompleted() }

                <span>
                    <div style={ listItem() }>
                        { task.item }
                    </div>

                    <div style={ listItemDetail() }>
                        <span style={{color: 'royalblue', display: listTitle !== "My Day" && task.my_day === true ? 'inline' : 'none'}}>
                            <FaRegSun style={{fontSize: '.9rem'}} /> My Day
                        </span>

                        <span style={{display: (listTitle !== "My Day" && listTitle !== "Tasks" && task.tasks && task.my_day) ? 'inline' : 'none'}}>
                            {'  '} &middot; {'  '}
                        </span>

                        <span style={{display: listTitle !== "Tasks" && task.tasks ? 'inline' : 'none'}}>
                            Tasks
                        </span>
                        
                        <span style={{display: (listTitle !== "Tasks" && task.tasks && task.date_due_display) ? 'inline' : 'none' }}>
                            {'  '} &middot; {'  '}
                        </span>

                        <span style={{ display: (listTitle !== "My Day" && listTitle === null && task.date_due_display && task.my_day) ? 'inline' : 'none' }}>
                            {'  '} &middot; {'  '}
                        </span>

                        { plannedDate() }
                    </div>
                </span>
            </div>

            <div>
                { renderImportant() }
            </div>
        </div>
    );
}

ListItem.propTypes = {
    task: PropTypes.object.isRequired,
    listTitle: PropTypes.string.isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onToggleImportant: PropTypes.func.isRequired
}

export default ListItem;