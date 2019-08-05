import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck, FaList } from 'react-icons/fa';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const TitleRow = ({list, index, lists, selectedListId, tasks, onClick=f=>f, onSetSelectedList=f=>f}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const headerStyle = text => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: name === text ? 'gainsboro' : null
        }
    }

    const handleClick = () => {
        onSetSelectedList(list.id, list.name);
        onClick();
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
            onClick={ handleClick }>

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
    selectedListId: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired,
    onClick: PropTypes.func,
    onSetSelectedList: PropTypes.func.isRequired
}
export default TitleRow;