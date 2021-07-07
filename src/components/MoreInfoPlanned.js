import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FaRegCalendar, FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { ListItem } from '@material-ui/core';

import { removeDateDue } from '../actions/tasksActions';
import PlannedMenu from './MoreInfoPlanned/MoreInfoPlannedMenu';

const MoreInfoPlanned = ({selectedTask, tasks, onRemoveDateDue=f=>f}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    if (!selectedTask[0]) return null;

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

    const onClick = e => {
        setAnchorEl(e.currentTarget);
    }
    
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

    return (
        <ListItem className="moreinfo-planned">
            {!selectedTask[0].date_due ? (
                <div className="moreinfo-planned-not-set align-center dimgray" onClick={onClick}>
                    <FaRegCalendar className="list-icon list-icon-margin-rt" />
                    <span>Add Due Date</span>
                </div>
            ) : (
                <div className="moreinfo-planned-set align-center space-between">
                    <div
                        className="align-center"
                        style={{ color: selectedTask[0].date_due < todaysDate ? 'crimson' : 'royalblue' }}
                        onClick={onClick}>
                            
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
