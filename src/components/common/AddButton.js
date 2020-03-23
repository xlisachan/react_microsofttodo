import React from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaPlus } from 'react-icons/fa';

const AddButton = ({addItem, item}) => {
    const add =
        <FaPlus 
            style={{fontSize: addItem === 'task' ? '1.2rem' : '1rem'}} 
            className="blue" 
        />

    const status = 
        <FaRegCircle 
            style={{fontSize: addItem === 'task' ? '1.2rem' : '1rem'}} 
            className="gray" 
        /> 

    return (
        <button className="add-btn" type="submit">
            { !item ?  add : status }
        </button>
    );
};

AddButton.propTypes = {
    addItem: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};
 
export default AddButton;
