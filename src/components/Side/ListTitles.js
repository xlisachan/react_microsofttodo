import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck } from 'react-icons/fa';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const ListTitles = ({tasks, lists, listTitle, onClick=f=>f, sideList, sideIcons}) => {
    const headerStyle = text => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: listTitle === text ? 'gainsboro' : null
        }
    }

    const iconStyle = () => {
        return {
            marginRight: -15, 
            fontSize: '1.3rem', 
            color: 'royalblue'
        }
    }

    const numberOfTasks = text => {
        const numOfTasks = tasks.filter(task =>
            task[`${ text.toLowerCase().replace(/ /g,"_") }`]
        ).length
        
        return numOfTasks > 0 ?
            <div style={{color: 'gray'}}>
                { numOfTasks }
            </div>
            :
            null
    }
    
    return (
        <List>
            { lists.map((list, index) => (
                <ListItem button key={list.name + '_' + list.id}
                    style={ headerStyle(list.name) }
                    onClick={() => onClick(list.name)}>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ListItemIcon style={ iconStyle() }>
                            { listIcons[index] }
                        </ListItemIcon>

                        <ListItemText primary={list.name} />
                    </div>

                    { numberOfTasks(list.name) } 
                </ListItem>
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