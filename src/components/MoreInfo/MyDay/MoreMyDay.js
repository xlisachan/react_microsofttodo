import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from '@material-ui/core';

const MoreMyDay = ({renderMyDay, selectedTask, onClick=f=>f}) => {
    return (
        <ListItem style={{margin: '10px 0px'}} onClick={ onClick }>
            { selectedTask[0].my_day ? renderMyDay.removeMyDay : renderMyDay.addMyDay }
        </ListItem>
    );
}

MoreMyDay.propTypes = {
    renderMyDay: PropTypes.object.isRequired,
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}
 
export default MoreMyDay;