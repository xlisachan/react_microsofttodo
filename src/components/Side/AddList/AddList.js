import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { ListItemText } from '@material-ui/core';

const AddList = ({onClick=f=>f})  => {
    return (
        <div className="add-list" onClick={ onClick }>
            <FaPlus className="list-icon list-icon-margin-rt" />

            <ListItemText primary="New List" />
        </div>
    );
};

AddList.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default AddList;