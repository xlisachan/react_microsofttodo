import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import SortBar from './SortBar/SortBarContainer';

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    appBar: {
        marginLeft: 200,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - 200px)`,
        },
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth+200}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
    }
}));

const Header = React.forwardRef(({formatColor, name, open, selectedList, secondaryColor=f=>f}, ref) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
            <Title ref={ref} name={name} formatColor={formatColor} secondaryColor={secondaryColor} />

            <SortBar barColor={ secondaryColor() } selectedList= {selectedList} />
        </AppBar>
    );
});

Header.propTypes = {
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    selectedList: PropTypes.array.isRequired,
    formatColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.func.isRequired
};

export default Header;