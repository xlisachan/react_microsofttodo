import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FaRegCalendar, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';

import { removeDateDue } from '../actions/tasksActions';
import PlannedMenu from './MoreInfoPlannedMenu';

const MoreInfoPlanned = ({
    selectedTask,
    tasks,
    onRemoveDateDue=f=>f,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    if (!selectedTask[0]) return null;

    const todaysDate = moment(new Date()).format('YYYY-MM-DD');

    const plannedStyle = () => {
        return {
            color: selectedTask[0].date_due < todaysDate ? 'crimson' : 'royalblue'
        }
    }

    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

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

    return (
        <ListItem className="moreinfo-body-list-item">
            {!selectedTask[0].date_due ? (
                <div className="align-center dimgray" onClick={ handleButtonClick }>
                    <FaRegCalendar className="list-icon list-icon-margin-rt" />
                    <span>Add Due Date</span>
                </div>
            ) : (
                <div className="align-center space-between">
                    <div className="align-center" style={plannedStyle()} onClick={ handleButtonClick }>
                        <FaRegCalendar className="list-icon list-icon-margin-rt" />
                        <span>Due {getDateDue()}</span>
                    </div>

                    <FaTimes
                        className="dimgray"
                        onClick={() => onRemoveDateDue(selectedTask[0].task_id)}
                    />
                </div>
            )}

            <PlannedMenu
                open={ Boolean(anchorEl) }
                onClose={ handleMenuClose }
                anchorEl={ anchorEl }
                selectedTask={ selectedTask }
                tasks={ tasks }
            />
        </ListItem>
    );
};

MoreInfoPlanned.propTypes = {
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => ({
    onRemoveDateDue(id) {
        dispatch(
            removeDateDue(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(MoreInfoPlanned);