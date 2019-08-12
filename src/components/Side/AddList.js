import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { FaPlus } from 'react-icons/fa';
import { ListItemText } from '@material-ui/core';

const AddList = ({lists, onAddList=f=>f})  => {
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

        onAddList(newList)
    }

    return (
        <div className="add-list" onClick={ handleClick }>
            <FaPlus style={{marginRight: 15}} />

            <ListItemText primary="New List" />
        </div>
    );
}

AddList.propTypes = {
    lists: PropTypes.array.isRequired,
    onAddList: PropTypes.func.isRequired,
}

export default AddList;