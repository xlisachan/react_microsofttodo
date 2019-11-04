import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search/Search';
import TitleList from './Lists/TitleListContainer';
import AddList from '../../components/Side/AddList/AddListContainer';

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

const Sidebar = React.forwardRef(({query, onChange=f=>f, onClear=f=>f, onClose=f=>f, onEditClick=f=>f}, ref) => {
    const classes = useStyles();

    return (
        <nav className={classes.drawer} aria-label="Todo Lists">
            <Hidden xsDown implementation="css">
                <Drawer open variant="permanent" classes={{paper: classes.drawerPaper}}>
                    <Search ref={ ref } query={ query } onChange={ onChange } onClear={ onClear } />

                    <TitleList onClick={ onClear } onClose={ onClose } onEditClick={ onEditClick } />

                    <AddList onEditClick={ onEditClick } onClose={ onClose } />
                </Drawer>
            </Hidden>
        </nav>
    );
});

Sidebar.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func
};

export default Sidebar;