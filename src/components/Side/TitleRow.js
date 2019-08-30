import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FaList } from 'react-icons/fa';

const TitleRow = ({list, listIcons, index, headerStyle=f=>f, iconStyle=f=>f, numberOfTasks=f=>f, onClick=f=>f}) => {
    return (
        <ListItem style={ headerStyle(list.name) } onClick={ onClick }>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <ListItemIcon style={ iconStyle(list.color) }>
                    { list.defaultList ? listIcons[index] : <FaList /> }
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
    listIcons: PropTypes.array.isRequired,
    headerStyle: PropTypes.func.isRequired,
    iconStyle: PropTypes.func.isRequired,
    numberOfTasks: PropTypes.func.isRequired,
    onClick: PropTypes.func
}
export default TitleRow;