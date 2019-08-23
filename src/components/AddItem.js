import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRegCircle, FaPlus } from 'react-icons/fa';
import { getCurrentDate }  from '../getDate';
import uuid from 'uuid';

const AddItem = ({addItem, lists, placeholder, selectedListId, selectedTaskId, onAddStep=f=>f, onAddTask=f=>f}) => {
    const [item, setItem] = useState('');
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;

    const itemStyle = () => {
        if (addItem === 'task') {
            return {
                margin: '0 auto',
                height: 60,
                padding: '10px 14px',
                borderBottom: '1px solid gainsboro'
            }
        } else {
            return {
                margin: '3px 0 10px 0',
                height: 30,
                padding: '10px 12px',
                borderBottom: 'none'
            }
        }
    }

    const onSubmit = e => {
        e.preventDefault();
        if(!item) return

        const newStep = {
            completedStatus: false,
            id: uuid.v4(),
            step: item,
            task_id: selectedTaskId
        }

        if (addItem === 'step') {
            onAddStep(newStep);
        }

        else {
            if (name === "My Day") {
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
                    list_id: 'tasks',
                    steps: []
                });
            } else if (name === "Important") {
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
                    list_id: 'tasks',
                    steps: []
                });
            } else if (name === "Planned") {
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
                    list_id: 'tasks',
                    steps: []
                });
            } else if (name === "Tasks") {
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
                    list_id: 'tasks',
                    steps: []
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
                    list_id: selectedList[0].id,
                    steps: []
                });
            }
        }

        setItem('');
    }

    const addButton = () =>
        <FaPlus className="list-icon blue" />

    const statusButton = () =>
        <FaRegCircle className="list-icon gray" /> 

    return (
        <form className="add-form align-center" style={ itemStyle() } onSubmit={ onSubmit }>
            <button className="add-btn" type="submit">
                { !item ?  addButton() : statusButton() }
            </button>
            
            <input
                style={{flex: '10', padding: 5, border: 'none'}}
                type="text"
                name="item"
                placeholder={ placeholder }
                value={ item }
                onChange={ e => setItem(e.target.value) }
            />
        </form>
    );
}

AddItem.propTypes = {
    addItem: PropTypes.string.isRequired,
    lists: PropTypes.array,
    placeholder: PropTypes.string.isRequired,
    selectedListId: PropTypes.any,
    selectedTaskId: PropTypes.string,
    onAddStep: PropTypes.func,
    onAddTask: PropTypes.func
}

export default AddItem;