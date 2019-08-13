import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, useMediaQuery } from '@material-ui/core';
import Header from '../../containers/Main/Header/Header';
import ListBody from '../../containers/Main/Body/ListBody';
import NoMatch from './Body/NoMatch';
import MoreSection from '../../containers/MoreInfo/MoreInfo';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        marginLeft: 200,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - 200px)`,
        },
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth+200}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
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

const Main = React.forwardRef(({lists, query, selectedListId, tasks, toggleMore, onOpenMore=f=>f}, ref) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const handleDrawerOpen = () => {
        if (!matches) return

        onOpenMore();
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
            if (task.item.toLowerCase().indexOf(query) !== -1) {
                filteredTasks.push(task);
            }
        })
        :
        filteredTasks = tasks.filter(task => {
            return task[`${ name.toLowerCase().replace(/ /g,"_") }`] || task.list_id === selectedListId
        })
        .sort((a,b) => {
            return (orderBy === 'item' || orderBy === 'date_due' || orderBy === 'date_created') ?
                (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) ? -1 * order : 1 * order
                :
                (orderDir === 'asc') ?
                    b[orderBy] - a[orderBy] : a[orderBy] - b[orderBy]
        })
        .filter(task => hideCompleted ? !task.completedStatus : task)

    const renderMainSection = () => {
        return query ?
            <div style={{flexGrow: 1}}>
                { filteredTasks.length > 0 ?
                    <ListBody tasks={ filteredTasks } />
                    :
                    <NoMatch />
                }
            </div>
            :
            <div style={{flexGrow: 1}} className={classes.root}>
                <CssBaseline />
                
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: toggleMore,
                    })}>

                    <Header ref={ref} />

                </AppBar>

                <main className={clsx(classes.content, {
                        [classes.contentShift]: toggleMore,
                    })}
                    style={{
                        position: selectedList[0].sorted ? 'relative' : null, 
                        top: selectedList[0].sorted ? 30 : null
                    }}>

                    <div className={classes.drawerHeader} />

                    <ListBody 
                        tasks={ filteredTasks } 
                        onClick={ handleDrawerOpen } 
                    />
                </main>

                <MoreSection />
            </div>
    }

    return (
        renderMainSection()
    )
})

Main.propTypes = {
    lists: PropTypes.array.isRequired,
    query: PropTypes.string,
    selectedListId: PropTypes.string.isRequired,
    toggleMore: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired,
    onCloseMore: PropTypes.func.isRequired,
    onOpenMore: PropTypes.func.isRequired
}

export default Main;