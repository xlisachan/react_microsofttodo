import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener, CssBaseline, Drawer, Hidden} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

const ResponsiveDrawer = ({lists, open, placeholder, selectedListId, onRenameList=f=>f}) => {
    let inputEl = null;
    const classes = useStyles();

    const handleClickAway = () => {
        const namesOnList = lists.map(list => list.name);
        const regex=/^\s+$/;

        if (open) {
            if (regex.test(placeholder) || placeholder === '') {
                let subName = "Untitled List"
                let num = 1
                
                while (namesOnList.includes(subName)) {
                    subName = `Untitled List (${num})`;
                    num++
                }
                onRenameList(selectedListId, subName);
            } else if (!namesOnList.includes(placeholder)){
                
                onRenameList(selectedListId, placeholder);
                
            } else if (namesOnList.includes(placeholder)) {
                let subName = placeholder;
                let num = 1;

                while (namesOnList.includes(subName)) {
                    subName = `${subName} (${num})`
                    num++
                }
                onRenameList(selectedListId, subName);
            }
        }
    };

    const editClick = () => {
        inputEl.select();
    }

    return (
        <ClickAwayListener onClickAway={ handleClickAway }>
            <div className={classes.root}>
                <CssBaseline />

                <nav className={classes.drawer} aria-label="Todo Lists">
                    <Hidden xsDown implementation="css">
                        <Drawer open variant="permanent"
                            classes={{paper: classes.drawerPaper}}>

                            <Sidebar onEditClick={ editClick } />
                        </Drawer>
                    </Hidden>
                </nav>

                <Main ref={input => inputEl = input} />
            </div>
        </ClickAwayListener>
    );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  lists: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  selectedListId: PropTypes.string.isRequired,
  onRenameList: PropTypes.func.isRequired
};

export default ResponsiveDrawer;