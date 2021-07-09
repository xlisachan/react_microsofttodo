import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Icon } from '@material-ui/core';

const Detail = ({el, name, task}) => {
    const todaysDate = moment(new Date()).format('YYYY-MM-DD');

    const statusColor = (el.id === 'my_day' || (el.id === 'planned' && task.date_due === todaysDate))
        ? 'royalblue'
        : (el.id === 'planned' && task.date_due < todaysDate)
            ? 'crimson'
            : null;
    
    const detailIcon = el.icon
        ? <Icon className="main-list-detail-icon">{el.icon}</Icon>
        : null

    const listDetail =
        <li className="main-list-detail" style={{ color: statusColor }}>
            {detailIcon}
            {el.text}
        </li>
    
    return (
        (el.id === "my_day" && task.my_day === true && name !== "My Day") ||
        (el.id === "custom" && task.tasks === false && name !== el.text) ||
        (el.id === "tasks" && task.tasks === true && name !== "Tasks") ||
        (el.id === "step" && task.steps.length > 0) ||
        (el.id === "planned" && task.date_due) ||
        (el.id === "note" && task.note)
    )
        ? listDetail
        : null
};

Detail.propTypes = {
    el: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired
};

export default Detail;