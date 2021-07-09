import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HeaderBanner from './HeaderBanner';
import HeaderSortBar from './HeaderSortBar';

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

const Header = React.forwardRef(({lists, open, selectedListId}, ref) => {
    const selectedList = lists.filter(list => list.id === selectedListId);
    const name = selectedList[0].name;
    const formatColor = 'rgb(' + selectedList[0].color.join(',') + ')';

    const secondaryColor = () => {
        const newArr = selectedList[0].color.map(col => parseInt(col * .6));
        const newColor = 'rgb(' + newArr.join(',') + ')';
        return newColor;
    };

    const classes = useStyles();

    return (
        <AppBar position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
            <HeaderBanner
                ref={ref}
                name={name}
                formatColor={formatColor}
                secondaryColor={secondaryColor}
            />

            <HeaderSortBar
                barColor={secondaryColor()}
                selectedList={selectedList}
            />
        </AppBar>
    );
});

Header.propTypes = {
    lists: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    selectedListId: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
});

export default connect(mapStateToProps, null, null, { forwardRef: true })(Header);
