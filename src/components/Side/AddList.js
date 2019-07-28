import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { FaPlus } from 'react-icons/fa';
import { ListItemText } from '@material-ui/core';

const AddList = ({lists, onAddList=f=>f})  => {
    const setListName = () => {
        const listNo = lists.filter(list => !list.defaultList).length

        return listNo > 0 ? `Untitled List ${listNo}` : "Untitled List"
    }

    const handleClick = () => {
        const newList = {
            id: uuid.v4(),
            name: setListName(),
            orderBy: 'date_created',
            orderDir: 'asc',
            sorted: false,
            hideCompleted: false,
            color: [80,40,250],
            defaultList: false
        }

        onAddList(newList)
    }

    return (
        <div className="add-list" onClick={ handleClick }>
            <FaPlus style={{marginRight: 23}} />

            <ListItemText primary="New List" />
        </div>
    );
}

AddList.propTypes = {
    lists: PropTypes.array.isRequired,
    onAddList: PropTypes.func.isRequired
}

export default AddList;