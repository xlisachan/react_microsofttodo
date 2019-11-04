import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Completed = ({selectedTask}) => {
    const getFormattedDate = (inputDate) => {
        let formattedDate;
        if (inputDate === moment(new Date()).format('YYYY-MM-DD')) {
            formattedDate = 'Today';
        } else if (inputDate === moment(new Date()).add(1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Tomorrow';
        } else if (inputDate === moment(new Date()).add(-1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Yesterday';
        } else {
            formattedDate = moment(inputDate).format('ddd, MMM D')
        }
        
        return formattedDate;
    }

    const completed =
        <span style={{fontSize: '.75rem'}}>
            Completed {' '} { getFormattedDate(selectedTask[0].date_completed) }
        </span>
    
    const created =
        <span style={{fontSize: '.75rem'}}>
            Created {' '} { getFormattedDate(selectedTask[0].date_created) }
        </span>

    return (
        selectedTask[0].completedStatus ? completed : created
    );
};

Completed.propTypes = {
    selectedTask: PropTypes.array.isRequired,
};
 
export default Completed;