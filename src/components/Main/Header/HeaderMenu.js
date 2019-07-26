import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItemText, Menu, MenuItem } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { FaCaretRight } from 'react-icons/fa';
import todoMenu from './todoMenu';

class HeaderMenu extends Component {
    state={
        subAnchorEl: null,
        subMenuOpen: false,
        value: null
    }

    handleSubItemClick = (e, item) => {
        this.setState({
            subAnchorEl: e.currentTarget,
            subMenuOpen: !this.state.subMenuOpen,
            value: item.id
        });
    }

    handleSubMenuClose = () => {
        this.setState({
            subMenuOpen: false
        });
    }

    handleSort = (item) => {
        const { listTitle, onToggleHide=f=>f, onChangeOrder=f=>f, onClose=f=>f } = this.props;

        item.id === 'hideTasks' || item.id === 'showTasks' ?
            onToggleHide(listTitle)
            :
            onChangeOrder(item.id, listTitle);
            this.setState({
                subMenuOpen: false
            });
            onClose();
    }

    renderMenuItems = children => {
        const { lists, listTitle } = this.props;

        const selectedList = lists.filter(list => list.name === listTitle),
              hideCompleted = selectedList[0].hideCompleted;

        return children.map(item => {
            if (item.children) {
                return (listTitle !== 'Planned' || item.id !== "sortTasks") ?
                    <div key={ item.caption }>
                        <MenuItem
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                            onClick={e => this.handleSubItemClick(e, item)}>
                        
                            <Icon style={{marginRight: '.5rem', fontSize: '1rem'}}>
                                { item.icon }
                            </Icon>

                            <ListItemText primary={ item.caption } />

                            <FaCaretRight />
                        </MenuItem>

                        { 
                            this.state.value === item.id &&
                            <Menu
                                anchorEl={ this.state.subAnchorEl }
                                open={ this.state.subMenuOpen }
                                onClose={ this.handleSubMenuClose }
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}>

                                { this.renderMenuItems(item.children) }
                            </Menu>
                        }
                    </div>
                    :
                    null
            }

            return (
                (
                    ((listTitle === 'My Day' && item.id !== 'my_day') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (listTitle === 'Important' && (item.id !== 'importantStatus' && item.id !== 'completedStatus') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (listTitle === 'Planned' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (listTitle === 'Tasks' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks')))
                ) ?
                    <MenuItem
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Icon style={{marginRight: '.5rem', fontSize: '1rem'}}>
                                { item.icon }
                            </Icon>
                    
                            <ListItemText 
                                primary={item.caption} 
                                onClick={() => this.handleSort(item)}
                            />
                    </MenuItem>
                    :
                    null
            )
        });
    };
 
    render() {
        const { anchorEl, open, onClose } = this.props;
        return (
            <Menu
                open={ open }
                onClose={ onClose }
                anchorEl={ anchorEl }>

                { this.renderMenuItems(todoMenu) }
            </Menu>
        );
    }
}

HeaderMenu.propTypes = {
    lists: PropTypes.array,
    listTitle: PropTypes.string,
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func
};

export default HeaderMenu;