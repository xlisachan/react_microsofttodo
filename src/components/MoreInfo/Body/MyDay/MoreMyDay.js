import React from 'react';
import PropTypes from 'prop-types';
import { FaRegSun, FaTimes } from 'react-icons/fa';
import { ListItem } from '@material-ui/core';

const MoreMyDay = ({selectedTask, onClick=f=>f}) => {
    const removeMyDay = 
        <div className="align-center space-between">
            <div className="align-center blue">
                <FaRegSun className="list-icon list-icon-left"/>
                Added to My Day 
            </div>
            
            <FaTimes style={{color: 'dimgray'}}/>
        </div>

    const addMyDay =
        <div className="align-center" style={{color: 'dimgray'}}>
            <FaRegSun className="list-icon list-icon-left" />
            <span>Add to My Day</span>
        </div>

    return (
        <ListItem style={{margin: '10px 0px'}} onClick={ onClick }>
            { selectedTask[0].my_day ? removeMyDay : addMyDay }
        </ListItem>
    );
};

MoreMyDay.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};
 
export default MoreMyDay;