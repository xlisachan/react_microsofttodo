import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Hidden } from '@material-ui/core';
import TopSection from '../../containers/MoreInfo/TopSection';
import BottomSection from '../../containers/MoreInfo/BottomSection';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#FAFAFA'
    },
    drawerHeader: {
        display: 'flex',
        flexDirection: 'column',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

const More = ({open, onClose=f=>f}) => {
    const classes = useStyles();

    return (
        <Hidden smDown implementation="css">
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={ open }
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>
                    <div className={classes.toolbar} />

                    <TopSection />

                    <Divider />

                    <BottomSection onClose={ onClose } />
                </div>
            </Drawer>
        </Hidden>
    )
}

More.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default More;