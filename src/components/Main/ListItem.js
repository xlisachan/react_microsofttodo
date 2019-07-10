import React, { Component } from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar, FaRegSun, FaRegCalendar } from 'react-icons/fa';

class ListItem extends Component {
    listItem = () => {
        return {
            color: this.props.task.completedStatus ? 'dimgray' : 'black',
            textDecoration: this.props.task.completedStatus ? 'line-through' : 'none'
        }
    }

    listItemDetail = () => {
        return {
            fontSize: '.8rem',
            color: this.props.task.completedStatus ? 'darkgray' : 'dimgray'
        }
    }

    renderCompleted = () => {
        return this.props.task.completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}}
                onClick={() => this.props.onToggleComplete(this.props.task.task_id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}}
                onClick={() => this.props.onToggleComplete(this.props.task.task_id)}
            />
    }

    renderImportant = () => {
        return this.props.task.importantStatus ? 
            <FaStar 
                style={{fontSize: '1.5rem', color: 'royalblue'}}
                onClick={() => this.props.onToggleImportant(this.props.task.task_id)}
            />
            :
            <FaRegStar
                style={{fontSize: '1.5rem', color: 'gray'}}
                onClick={() => this.props.onToggleImportant(this.props.task.task_id)}
            />
    }

    render() {
        return ( 
            <div className="list-item" >
                <div style={{display: 'flex', alignItems: 'center'}}>
                    { this.renderCompleted() }

                    <span>
                        <div style={ this.listItem() }>
                            { this.props.task.item }
                        </div>

                        <div style={ this.listItemDetail() }>
                            <span style={{color: 'royalblue', display: this.props.listTitle !== "My Day" && this.props.task.my_day === true ? 'inline' : 'none'}}>
                                <FaRegSun style={{fontSize: '.9rem'}} /> My Day
                            </span>

                            <span style={{display: (this.props.listTitle !== "My Day" && this.props.listTitle !== "Tasks" && this.props.task.tasks && this.props.task.my_day) ? 'inline' : 'none'}}>
                                {'  '} &middot; {'  '}
                            </span>

                            <span style={{display: this.props.listTitle !== "Tasks" && this.props.task.tasks ? 'inline' : 'none'}}>
                                Tasks
                            </span>
                            
                            <span style={{display: (this.props.listTitle !== "Tasks" && this.props.task.tasks && this.props.task.date_due) ? 'inline' : 'none' }}>
                                {'  '} &middot; {'  '}
                            </span>

                            <span style={{ display: (this.props.listTitle !== "My Day" && this.props.listTitle === null && this.props.task.date_due && this.props.task.my_day) ? 'inline' : 'none' }}>
                                {'  '} &middot; {'  '}
                            </span>

                            <span style={{display: this.props.task.date_due ? 'inline' : 'none'}}>
                                <FaRegCalendar style={{fontSize: '.9rem'}} /> { this.props.task.date_due }
                            </span>
                        </div>
                    </span>
                </div>

                <div>
                    { this.renderImportant() }
                </div>
            </div>
        );
    }
}

export default ListItem;