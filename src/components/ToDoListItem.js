import React, { Component } from 'react';
import { FaCheckCircle, FaRegCircle, FaStar, FaRegStar } from 'react-icons/fa';

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
            borderBottom: '1px solid gainsboro'
        }
    }

    listItem = () => {
        return {
            color: this.props.completed ? 'dimgray' : 'black',
            textDecoration: this.props.completed ? 'line-through' : 'none'
        }
    }

    renderCompleted = () => {
        return this.props.completed ? 
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
        return this.props.important ? 
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
        const { item } = this.props;
        return ( 
            <div style={ this.listItemStyle() }>

                <div style={{display: 'flex', alignItems: 'center'}}>
                    { this.renderCompleted() } 

                    <span>
                        <div style={ this.listItem() }>
                            { item }
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