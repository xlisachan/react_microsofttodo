import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaPlus } from 'react-icons/fa';
import { getDate, getCurrentDate }  from '../../getDate';
import uuid from 'uuid';

const AddTask = ({listTitle, onAddTask=f=>f}) => {
    const [item, setItem] = useState('');

    const handleButtonChange = () => {
        return !item ? 
            <FaPlus style={{color: 'royalblue'}} />
            :
            <FaRegCircle style={{color: 'gray'}} /> 
    }

    const onSubmit = e => {
        e.preventDefault();
        if(!item) return

        if (item && listTitle === "My Day") {
            onAddTask({
                task_id: uuid.v4(), 
                item: item, 
                date_created_full: new Date(), 
                date_created: getCurrentDate(getDate()), 
                date_due: "", 
                completedStatus: false, 
                importantStatus: false, 
                my_day: true, 
                planned: false, 
                important: false, 
                tasks: true
            });
        } else if (item && listTitle === "Important") {
            onAddTask({
                task_id: uuid.v4(), 
                item: item, 
                date_created_full: new Date(), 
                date_created: getCurrentDate(getDate()), 
                date_due: "",
                completedStatus: false, 
                importantStatus: true, 
                my_day: false, 
                planned: false, 
                important: true, 
                tasks: true
            });
        } else if (item && listTitle === "Planned") {
            onAddTask({
                task_id: uuid.v4(), 
                item: item, 
                date_created_full: new Date(), 
                date_created: getCurrentDate(getDate()), 
                date_due: "",
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: true, 
                important: false, 
                tasks: true
            });
        } else if (item && listTitle === "Tasks") {
            onAddTask({
                task_id: uuid.v4(), 
                item: item, 
                date_created_full: new Date(), 
                date_created: getCurrentDate(getDate()), 
                date_due: "",
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: false, 
                important: false, 
                tasks: true
            });
        } else if (item) {
            onAddTask({
                task_id: uuid.v4(), 
                item: item, 
                date_created_full: new Date(), 
                date_created: getCurrentDate(getDate()), 
                date_due: "",
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: false, 
                important: false, 
                tasks: true
            });
        }

        setItem('');
    }

    return (
        <form className="add-form" onSubmit={ onSubmit }>

            <button className="add-btn" type="submit">
                { handleButtonChange() }
            </button>
            
            <input
                style={{flex: '10', padding: 5, border: 'none'}}
                type="text"
                name="item"
                placeholder="Add a task"
                value={ item }
                onChange={ e => setItem(e.target.value) }
            />
        </form>
    );
}

AddTask.propTypes = {
    listTitle: PropTypes.string.isRequired,
    onAddTask: PropTypes.func.isRequired
}

export default AddTask;