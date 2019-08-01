import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck, FaList } from 'react-icons/fa';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const TitleRow = ({list, index, lists, selectedId, tasks, onClick=f=>f}) => {
    const selectedList = lists.filter(list => list.id === selectedId);
    const name = selectedList[0].name;

    const headerStyle = text => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: name === text ? 'gainsboro' : null
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

    const numberOfTasks = (id, name) => {
        const numOfTasks = tasks.filter(task =>
            ((task[`${name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === id) && !task.completedStatus)
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
            onClick={() => onClick(list.id)}>

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
    lists: PropTypes.array.isRequired,
    selectedId: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    onClick: PropTypes.func
}
export default TitleRow;