import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { FaPlus } from 'react-icons/fa';
import { ListItemText } from '@material-ui/core';

const AddList = ({lists, onAddList=f=>f, onEditClick=f=>f, onClose=f=>f})  => {
    const namesOnList = lists.map(list => list.name);

    const setListName = () => {
        let subName = "Untitled List";
        let num = 1;

        while (namesOnList.includes(subName)) {
            subName = `Untitled List ${num}`;
            num++;
        }

        return subName;
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

        onAddList(newList);
        onEditClick();
        onClose();
    }

    return (
        <div className="add-list" onClick={ handleClick }>
            <FaPlus className="list-icon list-icon-margin-rt" />

            <ListItemText primary="New List" />
        </div>
    );
}

AddList.propTypes = {
    lists: PropTypes.array.isRequired,
    onAddList: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}

export default AddList;