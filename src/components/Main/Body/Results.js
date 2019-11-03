import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListBody from './ListBodyContainer';
import MoreSection from '../../MoreInfo/MoreInfoContainer';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
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

export const Match = ({filteredTasks, selectedList, open, onOpen=f=>f, onClose=f=>f}) => {
    const classes = useStyles();

    const mainStyle = () => {
        return {
            position: selectedList[0].sorted ? 'relative' : null, 
            top: selectedList[0].sorted ? 30 : null
        }
    }

    return (
        <div className={classes.root}>
            <main style={ mainStyle() }
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>

                <ListBody tasks={ filteredTasks } onClick={ onOpen } onClose={ onClose } />
            </main>

            <MoreSection open={ open } onClose={ onClose } />
        </div>
    )
}

Match.propTypes = {
    filteredTasks: PropTypes.array,
    selectedList: PropTypes.array,
    open: PropTypes.bool.isRequired,
    onOpen: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export const NoMatch = () =>
    <div className="no-match align-center">
        <p>We searched high and low but couldn't find what you're looking for.</p>
    </div>