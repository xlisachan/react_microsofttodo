import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Header from '../../containers/Main/Header/Header';
import ListBody from '../../containers/Main/ListBody';
import NoMatch from './NoMatch';

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

const Main = ({query, tasks, listTitle, orderBy, orderDir}) => {
    const classes = useStyles();

    let filteredTasks = [];
    let order;

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
            if (a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
                return -1 * order
            } else {
                return 1 * order
            }
        })

    return(
        query ?
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

                <main className={classes.content}>
                    <div className={classes.toolbar} />

                    <ListBody tasks={ filteredTasks } />
                </main>
            </div>
    )
}

Main.propTypes = {
    query: PropTypes.string,
    tasks: PropTypes.array.isRequired,
    listTitle: PropTypes.string,
    orderBy: PropTypes.string,
    orderDir: PropTypes.string
}

export default Main;