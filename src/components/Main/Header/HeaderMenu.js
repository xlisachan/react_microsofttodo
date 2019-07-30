import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, ListItemText, Menu, MenuItem } from '@material-ui/core';
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

    formatColor = color => {
        return color ?
            'rgb(' + color.join(',') + ')' : null
    }

    handleSort = (item) => {
        const { selectedId, onToggleHide=f=>f, onChangeBgColor=f=>f, onChangeOrder=f=>f, onClose=f=>f } = this.props;

        item.id === 'hideTasks' || item.id === 'showTasks' ?
            onToggleHide(selectedId)
            :
            item.icon === 'lens' ?
                onChangeBgColor(item.color, selectedId)
                :
                onChangeOrder(item.id, selectedId);
                this.setState({
                    subMenuOpen: false
                });
                onClose();
    }

    renderMenuItems = children => {
        const { lists, selectedId } = this.props;

        const selectedList = lists.filter(list => list.id === selectedId),
              name = selectedList[0].name,
              hideCompleted = selectedList[0].hideCompleted,
              defaultList = selectedList[0].defaultList;

        return children.map(item => {
            if (item.children) {
                return (name !== 'Planned' || item.id !== "sortTasks") ?
                    <div key={ item.id }>
                        <MenuItem
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                            onClick={e => this.handleSubItemClick(e, item)}>
                        
                            <Icon style={{marginRight: '.5rem', fontSize: item.size}}>
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
                    ((name === 'My Day' && item.id !== 'my_day') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Important' && (item.id !== 'importantStatus' && item.id !== 'completedStatus') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Planned' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Tasks' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (!defaultList && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks')))
                ) ?
                    <MenuItem
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        onClick={() => this.handleSort(item)}>
                            <Icon style={{color: this.formatColor(item.color), marginRight: '.5rem', fontSize: item.size}}>
                                { item.icon }
                            </Icon>
                    
                            <ListItemText 
                                primary={item.caption} 
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
    selectedId: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    onChangeOrder: PropTypes.func,
    onChangeBgColor: PropTypes.func,
    onToggleHide: PropTypes.func.isRequired
};

export default HeaderMenu;