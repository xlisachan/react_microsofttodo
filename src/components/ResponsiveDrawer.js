import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TDHeader from './TDHeader';
import ToDoListItem from './ToDoListItem';
import ToDoAddItem from './ToDoAddItem';
import { FaRegSun, FaRegStar, FaRegCalendar, FaRegCalendarCheck } from 'react-icons/fa';

const drawerWidth = 240;

const listIcons = [<FaRegSun />, <FaRegStar />, <FaRegCalendar />, <FaRegCalendarCheck />];

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function ResponsiveDrawer(props) {
    const { container, listTitle, date, moreInfo, getListTitle, toggleCompleted, toggleImportant, toggleMoreInfo, addTask } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['My Day', 'Important', 'Planned', 'Tasks'].map((text, index) => (
                    <ListItem 
                        button 
                        key={text}
                        style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between', 
                            backgroundColor: listTitle === text ? 'gainsboro' : null
                        }}
                        onClick={ () => getListTitle(text) }>

                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <ListItemIcon 
                                style={{
                                    marginRight: -15, 
                                    fontSize: '1.5rem', 
                                    color: 'royalblue'
                                    }}>

                                { listIcons[index] }
                            </ListItemIcon>

                            <ListItemText primary={text} />
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <TDHeader
                    date={ date }
                    listTitle={ listTitle }
                />
            </AppBar>

            <nav className={classes.drawer} aria-label="Mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                    
                </Hidden>

                <Hidden xsDown implementation="css">

                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                        >
                        
                        {drawer}
                    </Drawer>

                </Hidden>
            </nav>

            <main className={classes.content}>

                <div className={classes.toolbar} />

                <div style={{position: 'relative', top: 40}}>
                    { 
                        props.tasks.map(task => {
                            return (
                                <ToDoListItem 
                                    key={ task.task_id }
                                    { ... task }
                                    listTitle={ listTitle }
                                    moreInfo={ moreInfo }
                                    toggleCompleted={ toggleCompleted }
                                    toggleImportant={ toggleImportant }
                                    toggleMoreInfo={ toggleMoreInfo }
                                />
                            )
                        })
                    }

                    <ToDoAddItem
                        addTask={ addTask }
                    />
                </div>
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};