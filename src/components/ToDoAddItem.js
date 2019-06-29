import React, { Component } from 'react';
import { FaRegCircle, FaPlus } from 'react-icons/fa';

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

    onSubmit = e => {
        e.preventDefault();

        if (this.state.item) {
            this.props.addTask(this.state.item);

            this.setState({
                item: ""
            })
        }
    }

    render() {
        return (
            <form style={ addItemStyle } onSubmit={ this.onSubmit }>

                <button style={ buttonStyle } type="submit">
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

const addItemStyle = {
    width: '100%',
    height: 60,
    margin: '0px auto',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 13px',
    borderBottom: '1px solid gainsboro',
}

const buttonStyle = {
    fontSize: '1.5rem',
    marginRight: 5,
    background: 'transparent',
    border: 'none'
}

export default AddTask;