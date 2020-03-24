import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details/Details';

const Item = ({task}) => {
    const listItem = () => {
        return {
            color: task.completedStatus ? 'dimgray' : 'black',
            textDecoration: task.completedStatus ? 'line-through' : 'none'
        }
    }
    
    return (
        <span style={ listItem() }>
            { task.item }

            <Details task={ task } />
        </span>
    );
};

Item.propTypes = {
    task: PropTypes.object.isRequired
};
 
export default Item;