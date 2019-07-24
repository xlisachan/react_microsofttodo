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

const Main = ({query, tasks}) => {
    const classes = useStyles();

    return(
        query ?
            <div style={{flexGrow: 1}}>
                { tasks.length > 0 ?
                    <ListBody tasks={ tasks } />
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

                    <ListBody tasks={ tasks } 
                    />
                </main>
            </div>
    )
}

Main.propTypes = {
    query: PropTypes.string,
    tasks: PropTypes.array.isRequired
}

export default Main;