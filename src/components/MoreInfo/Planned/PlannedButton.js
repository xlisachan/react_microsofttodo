import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FaRegCalendar, FaTimes } from 'react-icons/fa';

const PlannedButton = ({selectedTask, onClick=f=>f, onRemoveDateDue=f=>f}) => {
    if (!selectedTask[0]) return null;

    const todaysDate = moment(new Date()).format('YYYY-MM-DD');

    const getDateDue = () => {
        if (!selectedTask[0].date_due) return

        let formattedDate;
        if (selectedTask[0].date_due === todaysDate) {
            formattedDate = 'Today';
        } else if (selectedTask[0].date_due === moment(new Date()).add(1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Tomorrow';
        } else if (selectedTask[0].date_due === moment(new Date()).add(-1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Yesterday';
        } else {
            formattedDate = moment(selectedTask[0].date_due).format('ddd, MMM D')
        }
        return formattedDate;
    }

    const renderAddDate = () =>
        <div className="align-center" style={{color: 'dimgray'}} onClick={ onClick }>
            <FaRegCalendar className="list-icon list-icon-margin-rt" />
            <span>Add Due Date</span>
        </div>

    const renderDueDate = () =>
        <div className="align-center space-between">
            <div className="align-center" style={{color: selectedTask[0].date_due < todaysDate ? 'crimson' : 'royalblue'}} onClick={ onClick }>
                <FaRegCalendar className="list-icon list-icon-margin-rt" />
                <span>Due {getDateDue()}</span>
            </div>

            <FaTimes style={{color: 'dimgray'}} onClick={() => onRemoveDateDue(selectedTask[0].task_id)} />
        </div>

    return !selectedTask[0].date_due ? renderAddDate() : renderDueDate()
}

PlannedButton.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onRemoveDateDue: PropTypes.func.isRequired
}
 
export default PlannedButton;