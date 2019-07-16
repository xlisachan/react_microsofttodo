import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const ListTitles = ({tasks, listTitle, onClick=f=>f, sideList, sideIcons}) => {
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
            fontSize: '1.5rem', 
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
            { sideList.map((text, index) => (
                <ListItem button key={text}
                    style={ headerStyle(text) }
                    onClick={() => onClick(text)}>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <ListItemIcon style={ iconStyle() }>
                            { sideIcons[index] }
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </div>

                    { numberOfTasks(text) }
                </ListItem>
            ))}
        </List>
    );
}

ListTitles.propTypes = {
    tasks: PropTypes.array.isRequired,
    listTitle: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    sideList: PropTypes.array.isRequired,
    sideIcons: PropTypes.array.isRequired
}
 
export default ListTitles;