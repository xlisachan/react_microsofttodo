import React from 'react';
import PropTypes from 'prop-types';
import {
    FaList,
    FaRegSun,
    FaRegStar,
    FaRegCalendar,
    FaRegCalendarCheck
} from 'react-icons/fa';
import { connect } from 'react-redux';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { setList } from '../actions/currentActions';

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const SideListItem = ({
    list,
    index,
    lists,
    query,
    selectedListId,
    tasks,
    onClick = f => f,
    onClose = f => f,
    onSetList = f => f
}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const headerStyle = text => {
        return {
            alignItems: 'center',
            backgroundColor: name === text ? 'gainsboro' : null,
            display: 'flex', 
            justifyContent: 'space-between'
        }
    }

    const iconStyle = color => {
        return {
            marginRight: -25, 
            fontSize: 19,
            color: 'rgb(' + color.join(',') + ')'
        }
    }

    const handleClick = () => {
        if (query) {
            onClick()
        }

        onSetList(list.id, list.name);
        onClose();
    }

    const numberOfTasks = (id, name) => {
        const numOfTasks = tasks.filter(task =>
            ((task[`${name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === id) && !task.completedStatus)
        ).length
        
        return numOfTasks > 0 ?
            <div className="gray">
                { numOfTasks }
            </div>
            :
            null
    }

    return (
        <ListItem style={ headerStyle(list.name) } onClick={ handleClick }>
            <div className="side-list-item">
                <ListItemIcon style={ iconStyle(list.color) }>
                    { list.defaultList ? listIcons[index] : <FaList /> }
                </ListItemIcon>

                <ListItemText primary={list.name} />
            </div>

            { numberOfTasks(list.id, list.name) } 
        </ListItem>
    );
};

SideListItem.propTypes = {
    index: PropTypes.number,
    list: PropTypes.object.isRequired,
    lists: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    selectedListId: PropTypes.string.isRequired,
    tasks: PropTypes.array,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onSetList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    onSetList(id, title) {
        dispatch(
            setList(id, title)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideListItem);
