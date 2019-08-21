import React from 'react';
import { CssBaseline, Drawer, Hidden, useMediaQuery} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Sidebar from '../containers/Side/Sidebar';
import Main from '../containers/Main/Main';

const drawerWidth = 200;

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
    drawerPaper: {
        width: drawerWidth,
        background: '#eee'
    },
}));

const ResponsiveDrawer = () => {
    let inputEl = null;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const [openDrawer, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        if (!matches) return
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const editClick = () => {
        if(inputEl) {
            inputEl.select();
        }
    }

    return (
        <div className={classes.root}>
            <CssBaseline />

            <nav className={classes.drawer} aria-label="Todo Lists">
                <Hidden xsDown implementation="css">
                    <Drawer open variant="permanent"
                        classes={{paper: classes.drawerPaper}}>

                        <Sidebar
                            onClose={ handleDrawerClose }
                            onEditClick={ editClick }
                        />
                    </Drawer>
                </Hidden>
            </nav>

            <Main
                ref={input => inputEl = input}
                open={ openDrawer }
                onOpen={ handleDrawerOpen }
                onClose={ handleDrawerClose }
            />
        </div>
    );
}

export default ResponsiveDrawer;