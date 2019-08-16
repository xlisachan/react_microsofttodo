import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener, CssBaseline, Drawer, Hidden, useMediaQuery} from '@material-ui/core';
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

const ResponsiveDrawer = ({currentTask, item, lists, open, placeholder, selectedListId, selectedTaskId, tasks, onRenameList=f=>f, onUpdateTask=f=>f}) => {
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

    const handleClickAway = () => {
        const namesOnList = lists.map(list => list.name);
        const regex=/^\s+$/;
        const selectedTask = tasks.filter(task => task.task_id === selectedTaskId)

        if (open && item === 'list') {
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
        } else if (open && item === 'task') {
            if (currentTask === '') {
                let subTask = selectedTask[0].item
                onUpdateTask(selectedTaskId, subTask);
            } else {
                onUpdateTask(selectedTaskId, currentTask);
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
        </ClickAwayListener>
    );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  currentTask: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  lists: PropTypes.array.isRequired,
  open: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  selectedListId: PropTypes.string.isRequired,
  selectedTaskId: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
  onRenameList: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired
};

export default ResponsiveDrawer;