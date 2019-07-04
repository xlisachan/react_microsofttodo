import React, { Component } from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar, FaRegSun, FaRegCalendar } from 'react-icons/fa';

class ListItem extends Component {

    listItemStyle = () => {
        return {
            width: '100%',
            height: 60,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px 20px',
            borderBottom: '1px solid gainsboro',
            backgroundColor: this.props.moreInfo.task_id === this.props.task.task_id ? 'whitesmoke' : null,
            borderRadius: this.props.moreInfo.task_id === this.props.task.task_id ? 10 : null
        }
    }

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
        const { item, list, listTitle, date_due, my_day } = this.props.task;

        return ( 
            <div onClick={() => this.props.onToggleMoreInfo(this.props.task)} >
                <div style={ this.listItemStyle() } >

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        { this.renderCompleted() } 

                        <span>
                            <div style={ this.listItem() }>
                                { item }
                            </div>

                            <div style={ this.listItemDetail() }>
                                <span style={{color: 'royalblue', display: listTitle !== "My Day" && my_day === true ? 'inline' : 'none'}}>
                                    <FaRegSun style={{fontSize: '.9rem'}} /> My Day
                                </span>

                                <span style={{display: (listTitle !== "My Day" && my_day === true && list === "Tasks" && listTitle !== "Tasks") ? 'inline' : 'none'}}>
                                    {'  '} &middot; {'  '}
                                </span>

                                <span style={{display: list === "Tasks" && listTitle !== "Tasks" ? 'inline' : 'none'}}>
                                    { list }  
                                </span>
                                
                                <span style={{display: (list === "Tasks" && listTitle !== "Tasks" && date_due) ? 'inline' : 'none' }}>
                                    {'  '} &middot; {'  '}
                                </span>

                                <span style={{ display: (listTitle !== "My Day" && my_day === true && date_due && listTitle === null) ? 'inline' : 'none' }}>
                                    {'  '} &middot; {'  '}
                                </span>

                                <span style={{display: date_due ? 'inline' : 'none'}}>
                                    <FaRegCalendar style={{fontSize: '.9rem'}} /> { date_due }
                                </span>
                            </div>
                        </span>
                    </div>

                    <div>
                        { this.renderImportant() }
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;