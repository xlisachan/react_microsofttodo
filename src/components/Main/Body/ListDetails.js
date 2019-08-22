import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
import Moment from 'react-moment';
import Detail from './Detail';

const ListDetails = ({lists, selectedListId, task}) => {
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

    const getPlannedDate = () => {
        return !task.date_due ?
            null :
            <Moment
                date={ task.date_due }
                parse="YYYY-MM-DD"
                format="ddd, MMM D"
            />
    }

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
            "text": getPlannedDate()
        }
    ];

    const renderDetails = (arr) => {
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
}

ListDetails.propTypes = {
    lists: PropTypes.array.isRequired,
    selectedListId: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired
}
 
export default ListDetails;