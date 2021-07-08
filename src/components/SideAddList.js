import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { ListItemText } from '@material-ui/core';

import { addList } from '../actions/listsActions';
import { setList } from '../actions/currentActions';

const SideAddList = ({
    lists,
    onAddList = f => f,
    onEditClick = f => f,
    onClose = f => f
}) => {
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

    const onClick = () => {
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
        <div className="side-add-list" onClick={ onClick }>
            <FaPlus className="list-icon list-icon-margin-rt" />

            <ListItemText primary="New List" />
        </div>
    );
};

SideAddList.propTypes = {
    lists: PropTypes.array.isRequired,
    onAddList: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
});

const mapDispatchToProps = dispatch => ({
    onAddList({id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList}) {
        dispatch(
            addList(id, name, orderBy, orderDir, sorted, hideCompleted, color, defaultList)
        )

        dispatch(
            setList(id, name)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SideAddList);
