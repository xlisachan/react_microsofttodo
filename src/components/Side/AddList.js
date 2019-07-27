import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { FaPlus } from 'react-icons/fa';
import { ListItemText } from '@material-ui/core';

class AddList extends Component {
    state={ count: 0 }

    setListName = () => {
        this.setState({
            count: parseInt(this.state.count + 1)
        }) 
        return this.state.count === 0 ? "Untitled List" : `Untitled List ${this.state.count}`
    }

    handleClick = () => {
        const newList = {
            id: uuid.v4(),
            name: this.setListName(),
            orderBy: 'date_created',
            orderDir: 'asc',
            sorted: false,
            hideCompleted: false,
            color: [80,40,250],
            defaultList: false
        }

        this.props.onAddList(newList)
    }

    render() {
        return (
            <div className="add-list" onClick={ this.handleClick }>
                <FaPlus style={{marginRight: 23}} />

                <ListItemText primary="New List" />
            </div>
        );
    }
}

AddList.propTypes = {
    onAddList: PropTypes.func.isRequired
}

export default AddList;