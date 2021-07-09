import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade('#787', 0.15),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '88%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 6),
        transition: theme.transitions.create('width'),
        width: '90%',
    },
}));

const SideSearch = React.forwardRef(({query, onChange=f=>f, onClear=f=>f}, ref) => {
    const classes = useStyles();

    return (
        <div className="side-search">
            <div className={classes.toolbar} />

            <div className={classes.search} style={{width: '90%', margin: 'auto'}}>
                <div className={classes.searchIcon}>
                    <FaSearch className="side-search-icons" />
                </div>

                <InputBase
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                    inputRef={ ref }
                    onChange={ onChange }
                />

                {!query ?
                    null :
                    <FaTimesCircle
                        className="side-search-icons"
                        onClick={onClear}
                    />
                }
            </div>
        </div>
    );
});

SideSearch.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClear: PropTypes.func.isRequired,
};

export default SideSearch;