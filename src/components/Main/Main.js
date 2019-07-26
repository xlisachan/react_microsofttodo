import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Header from '../../containers/Main/Header/Header';
import ListBody from '../../containers/Main/Body/ListBody';
import NoMatch from './Body/NoMatch';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Main = ({query, tasks, lists, listTitle}) => {
    const classes = useStyles();

    let filteredTasks = [],
        order,
        selectedList = lists.filter(list => list.name === listTitle),
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
        filteredTasks = tasks.filter(task =>
            task[`${ listTitle.toLowerCase().replace(/ /g,"_") }`]
        )
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
            <div style={{flexGrow: 1}}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Header />
                </AppBar>

                <main 
                    className={classes.content}
                    style={{ 
                        position: selectedList[0].sorted ? 'relative' : null, 
                        top: selectedList[0].sorted ? 30 : null
                    }}>
                    <div className={classes.toolbar} />

                    <ListBody tasks={ filteredTasks } />
                </main>
            </div>
    }

    return (
        renderMainSection()
    )
}

Main.propTypes = {
    query: PropTypes.string,
    tasks: PropTypes.array.isRequired,
    listTitle: PropTypes.string,
    lists: PropTypes.array
}

export default Main;