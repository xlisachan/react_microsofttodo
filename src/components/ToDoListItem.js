import React, { Component } from 'react';

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

    render() {
        const { item } = this.props;
        return ( 
            <div style={ this.listItemStyle() }>
                { item }
            </div>
        );
    }
}
 
export default TodoListItem;