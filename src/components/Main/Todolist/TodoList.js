import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import ListBody from './Body';
import MoreSection from '../../../sections/MoreInfo/';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.up('md')]: {
            marginRight: -drawerWidth,
        }
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const TodoList = React.forwardRef(({filteredTasks, open, selectedList, onOpen=f=>f, onClose=f=>f}, ref) => {
    const classes = useStyles();

    const mainStyle = () => {
        return {
            position: selectedList[0].sorted ? 'relative' : null, 
            top: selectedList[0].sorted ? 30 : null
        }
    }

    return (
        <div style={{flexGrow: 1}} className={classes.root}>
            <CssBaseline />

            <Header ref={ref} open={open} />

            <main style={ mainStyle() }
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>

                <div className={classes.drawerHeader} />

                <ListBody tasks={ filteredTasks } onClick={ onOpen } onClose={ onClose } />
            </main>

            <MoreSection open={ open } onClose={ onClose } />
        </div>
    );
});

TodoList.propTypes = {
    filteredTasks: PropTypes.array,
    open: PropTypes.bool.isRequired,
    selectedList: PropTypes.array,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
};

export default TodoList;