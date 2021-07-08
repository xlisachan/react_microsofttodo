import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Drawer, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { changeQuery, clearQuery } from '../../actions/queryActions';
import SideAddList from '../../components/SideAddList';
import SideSearch from '../../components/SideSearch';
import SideTitleList from '../../components/SideTitleList';

import './styles.css';

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

const Side = ({
    query,
    onChangeQuery = f => f,
    onClear = f => f,
    onClose = f => f,
    onEditClick = f => f
}) => {
    let _searchInput;

    const classes = useStyles();

    const onChange = val => {
        onChangeQuery(val);
        onClose();
    }

    const clearSearch = () => {
        _searchInput.value = '';
        onClear();
    }

    return (
        <nav className={classes.drawer} aria-label="Todo Lists">
            <Hidden xsDown implementation="css">
                <Drawer
                    open variant="permanent"
                    classes={{ paper: classes.drawerPaper }}>
                    
                    <SideSearch
                        ref={ input => _searchInput = input }
                        query={query}
                        onChange={e => onChange(e.target.value)}
                        onClear={clearSearch}
                    />

                    <SideTitleList
                        onClick={onClear}
                        onClose={onClose}
                        onEditClick={onEditClick}
                    />

                    <SideAddList
                        onEditClick={onEditClick}
                        onClose={onClose}
                    />
                </Drawer>
            </Hidden>
        </nav>
    )
};

Side.propTypes = {
    query: PropTypes.string,
    onChangeQuery: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    query: state.query
});

const mapDispatchToProps = dispatch => ({
    onChangeQuery(query) {
        dispatch(
            changeQuery(query)
        )
    },

    onClear() {
        dispatch(
            clearQuery()
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(Side);