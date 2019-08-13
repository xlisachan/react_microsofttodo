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

const More = ({toggleMore}) => {
    const classes = useStyles();

    return (
        <Hidden smDown implementation="css">
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={toggleMore}
                classes={{
                    paper: classes.drawerPaper,
                }}>

                <div className={classes.drawerHeader}>
                    <div className={classes.toolbar} />

                    <TopSection />

                    <Divider />

                    <BottomSection />
                </div>
            </Drawer>
        </Hidden>
    )
}

More.propTypes = {
    toggleMore: PropTypes.bool.isRequired
}

export default More;