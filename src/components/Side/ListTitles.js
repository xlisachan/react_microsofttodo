import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck, FaList } from 'react-icons/fa';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const ListTitles = ({tasks, lists, listTitle, onClick=f=>f}) => {
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

    const defaultLists = lists.filter(list => list.defaultList)
    const customLists = lists.filter(list => !list.defaultList)

    const renderListRow= (list, index) => {
        return (
            <ListItem button key={list.name + '_' + list.id}
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
        )
    }

    return (
        <List>
            { defaultLists.map((list, index) => (
                renderListRow(list, index)
            ))}

            <Divider />

            { customLists.map((list, index) => (
                renderListRow(list, index)
            ))}
        </List>
    );
}

ListTitles.propTypes = {
    tasks: PropTypes.array.isRequired,
    lists: PropTypes.array.isRequired,
    listTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
 
export default ListTitles;