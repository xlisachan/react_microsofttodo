import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaPlus } from 'react-icons/fa';
import { getCurrentDate }  from '../../../getDate';
import uuid from 'uuid';

const AddItem = ({lists, selectedListId, onAddTask=f=>f}) => {
    const [item, setItem] = useState('');

    const handleButtonChange = () => {
        return !item ? 
            <FaPlus style={{color: 'royalblue'}} />
            :
            <FaRegCircle style={{color: 'gray'}} /> 
    }

    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name

    const onSubmit = e => {
        e.preventDefault();
        if(!item) return

        if (item && name === "My Day") {
            onAddTask({
                task_id: uuid.v4(), 
                item,
                date_completed: "",
                date_created: getCurrentDate(), 
                date_due: "", 
                completedStatus: false, 
                importantStatus: false, 
                my_day: true, 
                planned: false, 
                important: false, 
                tasks: true,
                list_id: 'tasks'
            });
        } else if (item && name === "Important") {
            onAddTask({
                task_id: uuid.v4(), 
                item, 
                date_completed: "",
                date_created: getCurrentDate(), 
                date_due: "",
                completedStatus: false, 
                importantStatus: true, 
                my_day: false, 
                planned: false, 
                important: true, 
                tasks: true,
                list_id: 'tasks'
            });
        } else if (item && name === "Planned") {
            onAddTask({
                task_id: uuid.v4(), 
                item, 
                date_completed: "",
                date_created: getCurrentDate(), 
                date_due: getCurrentDate(),
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: true, 
                important: false, 
                tasks: true,
                list_id: 'tasks'
            });
        } else if (item && name === "Tasks") {
            onAddTask({
                task_id: uuid.v4(), 
                item, 
                date_completed: "",
                date_created: getCurrentDate(), 
                date_due: "",
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: false, 
                important: false, 
                tasks: true,
                list_id: 'tasks'
            });
        } else {
            onAddTask({
                task_id: uuid.v4(), 
                item, 
                date_completed: "",
                date_created: getCurrentDate(), 
                date_due: "",
                completedStatus: false, 
                importantStatus: false, 
                my_day: false, 
                planned: false, 
                important: false, 
                tasks: false,
                list_id: selectedList[0].id
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

AddItem.propTypes = {
    lists: PropTypes.array.isRequired,
    selectedListId: PropTypes.any.isRequired,
    onAddTask: PropTypes.func.isRequired
}

export default AddItem;