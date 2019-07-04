import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import HeaderList from '../containers/Side/ListTitles';
import Header from '../containers/Main/Header';
import ListBody from '../containers/Main/ListBody';
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
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            
            <HeaderList
                sideList={ ['My Day', 'Important', 'Planned', 'Tasks'] }
                sideIcons={ listIcons }
            />

        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Header />
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

                <ListBody />

            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};