import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';
import { getCurrentDate } from '../../../getDate';

const Detail = ({el, name, task}) => {
    return (
        (el.id === "my_day" && task.my_day === true && name !== "My Day") ||
        (el.id === "tasks" && task.tasks === true && name !== "Tasks") ||
        (el.id === "step" && task.steps.length > 0) ||
        (el.id === "planned" && task.date_due)
        )?
            <li className="list-detail" 
                style={{
                    color: (el.id === 'my_day' || (el.id === 'planned' && task.date_due === getCurrentDate()))? 'royalblue' : el.id === 'planned' && task.date_due < getCurrentDate() ? 'crimson' : null
                }}>
                {el.icon ? <Icon style={{fontSize: 'small', marginRight: 3, paddingTop: 1}}>{el.icon}</Icon> : null}
                {el.text}
            </li>
            : null
}

Detail.propTypes = {
    el: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    task: PropTypes.object.isRequired
}

export default Detail;