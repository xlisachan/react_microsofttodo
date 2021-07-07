import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import { connect } from 'react-redux';

import DeleteModal from './DeleteModal';
import { removeTask } from '../actions/tasksActions';

const MoreInfoFooter= ({selectedTask, onClose=f=>f, onRemoveTask=f=>f}) => {
    if (!selectedTask[0]) return null;

    const getFormattedDate = inputDate => {
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
    };

    const onRemove = id => {
        onRemoveTask(id);
        onClose();
    };

    return (
        <div className="moreinfo-margins moreinfo-footer">
            <FaChevronRight onClick={onClose} />

            {selectedTask[0].completedStatus ? (
                <span className="moreinfo-footer-text">
                    Completed {getFormattedDate(selectedTask[0].date_completed)}
                </span>
            ) : (
                <span className="moreinfo-footer-text">
                    Created {getFormattedDate(selectedTask[0].date_created)}
                </span>
            )}

            <DeleteModal
                id={selectedTask[0].task_id}
                location={'moreinfo-bottom'}
                name={selectedTask[0].item}
                todo={'task'}
                onClick={() => onRemove(selectedTask[0].task_id)}
            />
        </div>
    );
};

MoreInfoFooter.propTypes = {
    selectedTask: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onRemoveTask: PropTypes.func.isRequired
};
 
const mapDispatchToProps = dispatch => ({
    onRemoveTask(id) {
        dispatch(
            removeTask(id)
        )
    }
});

export default connect(null, mapDispatchToProps)(MoreInfoFooter);