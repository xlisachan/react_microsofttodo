import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, Hidden, IconButton } from '@material-ui/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
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
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

const MoreInfo = ({open, onClick=f=>f}) => {
    const classes = useStyles();
    const theme = useTheme();

    const renderMore = () => {
        return (
            <Hidden smDown implementation="css">
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <Divider />

                        <IconButton onClick={onClick}>
                            {theme.direction === 'rtl' ? <FaChevronLeft /> : <FaChevronRight />}
                        </IconButton>
                    </div>
                </Drawer>
            </Hidden>
        )
    }

    return (
        renderMore()
    )
}

MoreInfo.propTypes = {
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default MoreInfo;