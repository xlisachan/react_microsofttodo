import React from 'react';
import '../../stylesheets/common.css';
import PropTypes from 'prop-types';
import { FaRegCircle, FaPlus } from 'react-icons/fa';

const AddButton = ({ addItem, item }) => {
    const getSize = addItem === 'task' ? '1.2rem' : '1rem';
    
    const add =
        <FaPlus 
            style={{fontSize: getSize}} 
            className="blue" 
        />

    const status = 
        <FaRegCircle 
            style={{fontSize: getSize}} 
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
