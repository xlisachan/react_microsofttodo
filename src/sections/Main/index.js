import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ListBody from '../../components/Main/Body';
import Header from '../../components/Main/Header';
import MoreInfo from '../MoreInfo/';

import './styles.css';

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

const MainSection = React.forwardRef(({lists, query, selectedListId, tasks, open, onClose=f=>f, onOpen=f=>f}, ref) => {
    const classes = useStyles();

    const mainStyle = () => {
        return {
            position: selectedList[0].sorted ? 'relative' : null, 
            top: selectedList[0].sorted ? 30 : null
        }
    }
    
    let filteredTasks = [],
        order,
        selectedList = lists.filter(list => list.id === selectedListId),
        name = selectedList[0].name,
        orderBy = selectedList[0].orderBy,
        orderDir = selectedList[0].orderDir,
        hideCompleted = selectedList[0].hideCompleted;

    orderDir === 'asc' ? order = 1 : order = -1;

    query ?
        tasks.forEach(task => {
            if (
                (task.item.toLowerCase().indexOf(query) !== -1) ||
                (task.note.toLowerCase().indexOf(query) !== -1)
            ){
                filteredTasks.push(task);
            }
        })
        :
        filteredTasks = tasks
            .filter(task => {
                return task[`${ name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === selectedListId
            })
            .sort((a,b) => {
                return (
                    orderBy === 'item' ||
                    orderBy === 'date_due' ||
                    orderBy === 'date_created'
                ) ?
                    (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) ? -1 * order : 1 * order
                    :
                    (orderDir === 'asc') ?
                        b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]
            })
            .filter(task => hideCompleted ? !task.completedStatus : task)

    return (
        filteredTasks.length > 0 ?
            <div style={{ flexGrow: 1 }} className={query? null : classes.root}>
                <div style={{ flexGrow: 1 }} className={classes.root}>
                    {query ? null : <CssBaseline />}

                    {query ?
                        null :
                        <Header
                            ref={ref}
                            open={open}
                        />
                    }

                    <main style={mainStyle()}
                        className={clsx(classes.content, {
                            [classes.contentShift]: open,
                        })}>
                        
                        {query ?
                            null :
                            <div className={classes.drawerHeader} />
                        }
                        
                        <ListBody
                            tasks={filteredTasks}
                            onClick={onOpen}
                            onClose={onClose}
                        />
                    </main>

                    <MoreInfo
                        open={open}
                        onClose={onClose}
                    />
                </div>
            </div>
         : (
            <div className="main-no-match align-center">
                <p>We searched high and low but couldn't find what you're looking for.</p>
            </div>
        )
    )
});

MainSection.propTypes = {
    lists: PropTypes.array,
    open: PropTypes.bool.isRequired,
    query: PropTypes.string,
    selectedListId: PropTypes.string,
    tasks: PropTypes.array,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired
};
    
const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks,
});

export default connect(mapStateToProps, null, null, {forwardRef: true})(MainSection);