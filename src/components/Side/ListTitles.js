import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

class ListTitles extends Component {

    headerStyle = (text) => {
        return {
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            backgroundColor: this.props.listTitle === text ? 'gainsboro' : null
        }
    }

    iconStyle = () => {
        return {
            marginRight: -15, 
            fontSize: '1.5rem', 
            color: 'royalblue'
        }
    }

    numberOfTasks = (text) => {
        const numOfTasks = this.props.tasks.filter(task =>
            task[`${ text.toLowerCase().replace(/ /g,"_") }`]
        ).length
        
        return numOfTasks > 0 ?
            <div style={{color: 'gray'}}>
                { numOfTasks }
            </div>
            :
            null
    }
    
    render() {
        const { getListTitle=f=>f, sideList, sideIcons } = this.props;
        return (
            <List>
                { sideList.map((text, index) => (
                    <ListItem button key={text}
                        style={ this.headerStyle(text) }
                        onClick={() => getListTitle(text)}>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <ListItemIcon style={ this.iconStyle() }>
                                { sideIcons[index] }
                            </ListItemIcon>

                            <ListItemText primary={text} />
                        </div>

                        { this.numberOfTasks(text) }

                    </ListItem>
                ))}
            </List>
        );
    }
}
 
export default ListTitles;