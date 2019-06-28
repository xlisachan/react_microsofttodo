import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddTask extends Component {
    state = {
        item: ""
    }

    addTask = e => {
        this.setState({
            item : e.target.value,
        })
    }

    onSubmit = e => {
        e.preventDefault();

        this.props.addTask(this.state.item);

        this.setState({
            item: ""
        })
    }

    render() {
        return (
            <form style={ addItemStyle } onSubmit={ this.onSubmit }>

                <button style={ buttonStyle } type="submit">
                    <FaPlus />
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

const addItemStyle = {
    width: '100%',
    height: 60,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px solid gainsboro',
}

const buttonStyle = {
    color: 'royalblue',
    background: 'transparent',
    border: 'none'
}

export default AddTask;