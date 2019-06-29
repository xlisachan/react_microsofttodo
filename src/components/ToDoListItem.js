import React, { Component } from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar, FaRegSun, FaRegCalendar } from 'react-icons/fa';

class TodoListItem extends Component {
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
            backgroundColor: this.props.moreInfo.task_id === this.props.task_id ? 'whitesmoke' : null,
            borderRadius: this.props.moreInfo.task_id === this.props.task_id ? 10 : null
        }
    }

    listItem = () => {
        return {
            color: this.props.completedStatus ? 'dimgray' : 'black',
            textDecoration: this.props.completedStatus ? 'line-through' : 'none'
        }
    }

    listItemDetail = () => {
        return {
            fontSize: '.8rem',
            color: this.props.completedStatus ? 'darkgray' : 'dimgray'
        }
    }

    renderCompleted = () => {
        return this.props.completedStatus ? 
            <FaCheckCircle
                style={{fontSize: '1.5rem', color: 'limegreen', marginRight: 15}}
                onClick={this.props.toggleCompleted.bind(this, this.props.task_id)}
            />
            :
            <FaRegCircle
                style={{fontSize: '1.5rem', color: 'gray', marginRight: 15}}
                onClick={this.props.toggleCompleted.bind(this, this.props.task_id)}
            />
    }

    renderImportant = () => {
        return this.props.importantStatus ? 
            <FaStar 
                style={{fontSize: '1.5rem', color: 'royalblue'}}
                onClick={this.props.toggleImportant.bind(this, this.props.task_id)}
            />
            :
            <FaRegStar
                style={{fontSize: '1.5rem', color: 'gray'}}
                onClick={this.props.toggleImportant.bind(this, this.props.task_id)}
            />
    }

    render() {
        const { item, list, date_due } = this.props;
        return ( 
            <div 
                style={ this.listItemStyle() }
                onClick={ this.props.toggleMoreInfo.bind(this, this.props) }
                >

                <div style={{display: 'flex', alignItems: 'center'}}>
                    { this.renderCompleted() } 

                    <span>
                        <div style={ this.listItem() }>
                            { item }
                        </div>

                        <div style={ this.listItemDetail() }>
                            <span style={{color: 'royalblue', display: this.props.listTitle !== "My Day" && this.props.my_day === true ? 'inline' : 'none'}}>
                                <FaRegSun style={{fontSize: '.9rem'}} /> My Day
                            </span>

                            <span style={{display: (this.props.listTitle !== "My Day" && this.props.my_day === true && this.props.list === "Tasks" && this.props.listTitle !== "Tasks") ? 'inline' : 'none'}}>
                                {'  '} &middot; {'  '}
                            </span>

                            <span style={{display: this.props.list === "Tasks" && this.props.listTitle !== "Tasks" ? 'inline' : 'none'}}>
                                { list }  
                            </span>
                            
                            <span style={{display: (this.props.list === "Tasks" && this.props.listTitle !== "Tasks" && date_due) ? 'inline' : 'none' }}>
                                {'  '} &middot; {'  '}
                            </span>

                            <span style={{ display: (this.props.listTitle !== "My Day" && this.props.my_day === true && date_due) ? 'inline' : 'none' }}>
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
        );
    }
}

export default TodoListItem;