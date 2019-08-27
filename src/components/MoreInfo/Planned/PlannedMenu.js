import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import { Icon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import DateMenu from './DateMenu';
import DatePicker from './DatePicker';

class PlannedMenu extends Component {
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
        const { selectedTask, tasks, onAddDateDue=f=>f, onClose=f=>f } = this.props;
        const arr = tasks.filter(task => task.task_id === selectedTask[0].task_id);
        const taskId = arr[0].task_id;
        const newDate = moment(new Date()).add(item.num, 'days').format('YYYY-MM-DD');

        onAddDateDue(taskId, newDate);
        onClose();
    }

    renderMenuItems = children => {
        const { selectedTask, tasks, onAddDateDue=f=>f, onClose=f=>f } = this.props;

        return children.map(item => {
            if (item.children) {
                return (
                    <MenuItem key={item.id}>
                        <DatePicker
                            selectedTask={ selectedTask }
                            tasks={ tasks }
                            onAddDateDue={ onAddDateDue }
                            onClose={ onClose }
                        />
                    </MenuItem>
                )
            }

            return (
                <MenuItem key={item.id}
                    className="align-center space-between"
                    onClick={() => this.handleSort(item)}>
                        <Icon className="list-icon" style={{marginRight: '.5rem'}}>
                            { item.icon }
                        </Icon>
                
                        <ListItemText primary={item.caption} />

                        <span style={{fontSize: item.size}}>
                            {item.day}
                        </span>
                </MenuItem>
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

                { this.renderMenuItems(DateMenu) }
            </Menu>
        );
    }
}

PlannedMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    selectedTask: PropTypes.array.isRequired,
    tasks: PropTypes.array.isRequired,
    onAddDateDue: PropTypes.func.isRequired
}

export default PlannedMenu;