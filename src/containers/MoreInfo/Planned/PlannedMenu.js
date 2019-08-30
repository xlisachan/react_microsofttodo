import React, { Component } from 'react';
import moment from 'moment'
import DatePicker from '../../../components/MoreInfo/Planned/DatePicker';
import { connect } from 'react-redux';
import { addDateDue } from '../../../actions';
import { Icon, ListItemText, MenuItem } from '@material-ui/core';
import PlannedMenu from '../../../components/MoreInfo/Planned/PlannedMenu';

class PlannedMenuContainer extends Component {
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
            <PlannedMenu anchorEl={ anchorEl } open={ open } onClose={ onClose } renderMenuItems={ this.renderMenuItems } />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    
    onAddDateDue(id, date) {
        dispatch(
            addDateDue(id, date)
        )
    }

})

export default connect(null, mapDispatchToProps)(PlannedMenuContainer);