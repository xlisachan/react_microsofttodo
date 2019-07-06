import React, { Component } from 'react';
import { FaRegCircle, FaPlus } from 'react-icons/fa';
import getDate from '../../getDate';
import uuid from 'uuid';

class AddTask extends Component {
    state = {
        item: ""
    }

    addTask = e => {
        this.setState({
            item : e.target.value,
        })
    }

    handleButtonChange = () => {
        return this.state.item.length > 0 ? 
            <FaRegCircle style={{color: 'gray'}}/> 
            :
            <FaPlus style={{color: 'royalblue'}} />
    }

    getDateCreated = date => {
        return date.weekday.substr(0,3) + ' ' + date.month.substr(0,3) + ' ' + date.day + ' ' + date.year;
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.item && this.props.listTitle === "Important") {
            this.props.onAddTask({
                task_id: uuid.v4(), 
                item: this.state.item, 
                list: "Tasks", 
                completedStatus: false, 
                importantStatus: true, 
                moreInfo: false,
                date_created_full: new Date(), 
                date_created: this.getDateCreated(getDate()), 
                date_due: "", 
                my_day: true, 
                planned: false, 
                important: true, 
                tasks: true
            });
        } else if (this.state.item) {
            this.props.onAddTask({
                task_id: uuid.v4(), 
                item: this.state.item, 
                list: "Tasks", 
                completedStatus: false, 
                importantStatus: false, 
                moreInfo: false,
                date_created_full: new Date(), 
                date_created: this.getDateCreated(getDate()), 
                date_due: "", 
                my_day: true, 
                planned: false, 
                important: false, 
                tasks: true
            });
        }

        this.setState({
            item: ""
        });
    }

    render() {
        return (
            <form className="add-form" onSubmit={ this.onSubmit }>

                <button className="add-btn" type="submit">
                    { this.handleButtonChange() }
                </button>
                
                <input
                    style={{flex: '10', padding: 5, border: 'none'}}
                    type="text"
                    name="item"
                    placeholder="Add a task"
                    value={ this.state.item }
                    onChange={ this.addTask }
                />
            </form>
        );
    }
}

export default AddTask;