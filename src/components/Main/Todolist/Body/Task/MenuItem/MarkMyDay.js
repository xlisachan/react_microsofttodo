import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MenuItem } from 'react-contextmenu';
import { FaRegSun } from 'react-icons/fa';
import { toggleMyDay } from '../../../../../../actions/tasksActions'; 

const MarkMyDay = ({task, onToggleMyDay=f=>f}) => {
    const removeMyDay =
        <div onClick={() => onToggleMyDay(task.task_id)}>
            <FaRegSun className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Remove from My Day</span>
        </div>

    const addMyDay =
        <div onClick={() => onToggleMyDay(task.task_id)}>
            <FaRegSun className="list-icon" style={{margin: '0 5px 3px 0'}}/>
            <span>Add to My Day</span>
        </div>

    return (
        <MenuItem>
            { task.my_day ? removeMyDay : addMyDay }
        </MenuItem>
    );
};

MarkMyDay.propTypes =  {
    task: PropTypes.object.isRequired,
    onToggleMyDay: PropTypes.func.isRequired
};
 
const mapDispatchToProps = dispatch => ({
    onToggleMyDay(id) {
        dispatch(
            toggleMyDay(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(MarkMyDay);