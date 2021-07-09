import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Drawer, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MoreInfoFooter from '../../components/MoreInfoFooter';
import MoreInfoHeader from '../../components/MoreInfoHeader';
import MoreInfoMyDay from '../../components/MoreInfoMyDay';
import MoreInfoNote from '../../components/MoreInfoNote';
import MoreInfoPlanned from '../../components/MoreInfoPlanned';
import MoreInfoSteps from '../../components/MoreInfoSteps';

import './styles.css';

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

const MoreInfo = ({currentTask, open, tasks, onClose=f=>f}) => {
    const classes = useStyles();
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

                    <MoreInfoHeader
                        currentTask={currentTask}
                        selectedTask={selectedTask}
                    />

                    <div className="moreinfo-body">
                        <MoreInfoSteps
                            selectedTask={selectedTask}
                        />

                        <Divider />

                        <MoreInfoMyDay
                            selectedTask={selectedTask}
                            onClose={onClose}
                        />

                        <Divider />

                        <MoreInfoPlanned
                            selectedTask={selectedTask}
                            tasks={tasks}
                        />

                        <Divider />

                        <MoreInfoNote
                            selectedTask={selectedTask}
                        />
                    </div>

                    <MoreInfoFooter
                        selectedTask={selectedTask}
                        onClose={onClose}
                    />
                </div>
            </Drawer>
        </Hidden>
    )
};

MoreInfo.propTypes = {
    currentTask: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired, 
    onClose: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    currentTask: state.current.task,
    tasks: state.tasks
});

export default connect(mapStateToProps)(MoreInfo);
