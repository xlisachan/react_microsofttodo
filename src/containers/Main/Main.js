import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, CssBaseline } from '@material-ui/core';
import Header from '../../containers/Main/Header/Header';
import ListBody from '../../containers/Main/Body/ListBody';
import NoMatch from '../../components/Main/Body/NoMatch';
import MoreSection from '../../containers/MoreInfo/MoreInfo';
import Main from '../../components/Main/Main';

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

const MainContainer = React.forwardRef(({lists, query, selectedListId, tasks, open, onClose=f=>f, onOpen=f=>f}, ref) => {
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

    const getSearchResults = () =>
        <div>
            <ListBody tasks={ filteredTasks } onClick={ onOpen } onClose={ onClose } />

            <MoreSection open={ open } onClose={ onClose } />
        </div>

    const searchResults = () =>
        <div style={{flexGrow: 1}}>
            { filteredTasks.length > 0 ? getSearchResults() : <NoMatch /> }
        </div>
    
    const todoList = () =>
        <div style={{flexGrow: 1}} className={classes.root}>
            <CssBaseline />
            
            <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>

                <Header ref={ref} />
            </AppBar>

            <main style={ mainStyle() }
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}>

                <div className={classes.drawerHeader} />

                <ListBody tasks={ filteredTasks } onClick={ onOpen } onClose={ onClose } />
            </main>

            <MoreSection open={ open } onClose={ onClose } />
        </div>

    const renderMain = {
        searchResults,
        todoList
    }

    return <Main query={ query } renderMain={ renderMain } />
})



const mapStateToProps = state => ({
    lists: state.lists,
    query: state.query,
    selectedListId: state.current.list["id"],
    tasks: state.tasks,
})

export default connect(mapStateToProps, null, null, {forwardRef: true})(MainContainer);