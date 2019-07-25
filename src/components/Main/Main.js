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

const Main = ({query, tasks, lists, listTitle}) => {
    const classes = useStyles();

    let filteredTasks = [],
        order,
        selectedList = lists.filter(list => list.name === listTitle);

    selectedList[0].orderDir === 'asc' ? order = 1 : order = -1;

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
            if (a[selectedList[0].orderBy].toLowerCase() < b[selectedList[0].orderBy].toLowerCase()) {
                return -1 * order
            } else {
                return 1 * order
            }
        })

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