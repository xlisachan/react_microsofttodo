import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { removeDateDue } from '../../../actions';
import { FaRegCalendar, FaTimes } from 'react-icons/fa';
import PlannedButton from '../../../components/MoreInfo/Planned/PlannedButton';

const PlannedButtonContainer = ({selectedTask, onClick=f=>f, onRemoveDateDue=f=>f}) => {
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

    const add =
        <div className="align-center" style={{color: 'dimgray'}} onClick={ onClick }>
            <FaRegCalendar className="list-icon list-icon-margin-rt" />
            <span>Add Due Date</span>
        </div>

    const show =
        <div className="align-center space-between">
            <div className="align-center" style={{color: selectedTask[0].date_due < todaysDate ? 'crimson' : 'royalblue'}} onClick={ onClick }>
                <FaRegCalendar className="list-icon list-icon-margin-rt" />
                <span>Due {getDateDue()}</span>
            </div>

            <FaTimes style={{color: 'dimgray'}} onClick={() => onRemoveDateDue(selectedTask[0].task_id)} />
        </div>

    const renderDateDue={
        add,
        show
    }

    return (
        <PlannedButton renderDateDue={ renderDateDue } selectedTask={ selectedTask } />
    )
}

const mapDispatchToProps = dispatch => ({

    onRemoveDateDue(id) {
        dispatch(
            removeDateDue(id)
        )
    }

})

export default connect(null, mapDispatchToProps)(PlannedButtonContainer);