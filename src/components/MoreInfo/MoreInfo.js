import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Hidden } from '@material-ui/core';
import TopSection from '../../containers/MoreInfo/TopSection';
import Steps from './Steps/Steps';
import MoreMyDay from '../../containers/MoreInfo/MyDay/MoreMyDay';
import MorePlanned from './Planned/MorePlanned';
import BottomSection from '../../containers/MoreInfo/BottomSection';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#FAFAFA'
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

const More = ({currentTask, tasks, open, onClose=f=>f}) => {
    const classes = useStyles()
    const selectedTask = tasks.filter(task => task.task_id === currentTask.id);

    return (
        <Hidden smDown implementation="css">
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={ open }
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>
                    <div className={classes.toolbar} />

                    <TopSection currentTask={ currentTask } selectedTask={ selectedTask } />

                    <Steps selectedTask={ selectedTask } />

                    <Divider />

                    <MoreMyDay selectedTask={ selectedTask } onClose={ onClose } />

                    <Divider />

                    <MorePlanned selectedTask={ selectedTask } tasks={ tasks } />

                    <Divider />

                    <BottomSection selectedTask={ selectedTask } onClose={ onClose } />
                </div>
            </Drawer>
        </Hidden>
    )
}

More.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default More;