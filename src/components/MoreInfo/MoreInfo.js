import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, Hidden, IconButton } from '@material-ui/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TopSection from '../../containers/MoreInfo/TopSection';

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

const MoreInfo = ({toggleMore, onCloseMore=f=>f}) => {
    const classes = useStyles();
    const theme = useTheme();

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

                    <IconButton onClick={() => onCloseMore() }>
                        {theme.direction === 'rtl' ? <FaChevronLeft /> : <FaChevronRight />}
                    </IconButton>
                </div>
            </Drawer>
        </Hidden>
    )
}

MoreInfo.propTypes = {
    toggleMore: PropTypes.bool.isRequired,
    onCloseMore: PropTypes.func.isRequired
}

export default MoreInfo;