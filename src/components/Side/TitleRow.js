import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck, FaList } from 'react-icons/fa';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const TitleRow = ({list, index, listTitle, tasks, onClick=f=>f}) => {
    const headerStyle = text => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: listTitle === text ? 'gainsboro' : null
        }
    }

    const formatColor = color => {
        return 'rgb(' + color.join(',') + ')';
    }

    const iconStyle = color => {
        return {
            marginRight: -15, 
            fontSize: '1.3rem',
            color: formatColor(color)
        }
    }

    const setListIcon = (list, index) => {
        return list.defaultList ? listIcons[index] : <FaList />
    }

    const numberOfTasks = (id, text) => {
        const numOfTasks = tasks.filter(task =>
            (task[`${ text.toLowerCase().replace(/ /g,"_") }`] && !task['completedStatus']) || 
            (task.list_id === id && !task['completedStatus'])
        ).length
        
        return numOfTasks > 0 ?
            <div style={{color: 'gray'}}>
                { numOfTasks }
            </div>
            :
            null
    }

    return (
        <ListItem button
            style={ headerStyle(list.name) }
            onClick={() => onClick(list.name)}>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <ListItemIcon style={ iconStyle(list.color) }>
                    { setListIcon(list, index) }
                </ListItemIcon>

                <ListItemText primary={list.name} />
            </div>

            { numberOfTasks(list.id, list.name) } 
        </ListItem>
    );
}

TitleRow.propTypes = {
    list: PropTypes.any,
    index: PropTypes.any,
    tasks: PropTypes.array.isRequired,
    listTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func
}
export default TitleRow;