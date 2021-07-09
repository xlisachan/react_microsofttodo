import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import moment from 'moment';
import Detail from './TaskDetail';

const Details = ({lists, selectedListId, task}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);

    const listItemDetail = () => {
        return {
            display: 'flex',
            fontSize: '.8rem',
            color: task.completedStatus ? 'darkgray' : 'dimgray'
        }
    }

    const getListName = () => {
        const arr = lists.filter(list => list.id === task.list_id);
        return arr[0].name;
    }

    const completedTask = () => {
        return numOfCompletedSteps() === task.steps.length ? <FaCheck style={{fontSize: '.7rem'}} /> : null
    }

    const numOfCompletedSteps = () => {
        let count = 0;
        task.steps.forEach(step => step.completedStatus === true ? count++ : count)

        return count;
    }

    const getFormattedDate = () => {
        let formattedDate;
        if (task.date_due === moment(new Date()).format('YYYY-MM-DD')) {
            formattedDate = 'Today';
        } else if (task.date_due === moment(new Date()).add(1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Tomorrow';
        } else if (task.date_due === moment(new Date()).add(-1, 'days').format('YYYY-MM-DD')) {
            formattedDate = 'Yesterday';
        } else {
            formattedDate = moment(task.date_due).format('ddd, MMM D')
        }
        return formattedDate;
    }
    
    const getPlannedDate = !task.date_due ? null : getFormattedDate();

    const details = [
        {
            "id": "my_day",
            "icon": "wb_sunny",
            "text": "My Day"
        },
        {
            "id": "tasks",
            "text": "Tasks"
        },
        {
            "id": "custom",
            "text": getListName()
        },
        {
            "id": "step",
            "icon": task.steps.length > 0 && completedTask() ? "check" : null,
            "text": task.steps.length > 0 ? `${numOfCompletedSteps()} of ${task.steps.length}` : null
        },
        {
            "id": "planned",
            "icon": "calendar_today",
            "text": getPlannedDate
        },
        {
            "id": "note",
            "icon": "bookmark_border",
            "text": "Note"
        }
    ];

    const renderDetails = arr => {
        const name = selectedList[0].name;

        return arr.map(detail =>
            <Detail key={detail.id} el= {detail} name={name} task={task} />
        )
    }

    return (
        <ul style={ listItemDetail() }>
            { renderDetails(details) }
        </ul>
    );
};

Details.propTypes = {
    lists: PropTypes.array.isRequired,
    selectedListId: PropTypes.string.isRequired, 
    task: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
});
 
export default connect(mapStateToProps)(Details);