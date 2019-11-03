import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

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
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 6),
        transition: theme.transitions.create('width'),
        width: '90%',
    },
}));

const Search = React.forwardRef(({query, onChange=f=>f, onClear=f=>f}, ref) => {
    const classes = useStyles();

    return (
        <div className="search-bar">
            <div className={classes.toolbar} />

            <div className={classes.search} style={{width: '90%', margin: 'auto'}}>
                <div className={classes.searchIcon}>
                    <FaSearch style={{fontSize: '1rem'}} />
                </div>

                <InputBase
                    style={{width: '88%'}}
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                    inputRef={ ref }
                    onChange={ onChange }
                />

                { !query ? null : <FaTimesCircle style={{fontSize: '1rem'}} onClick={ onClear } /> }
            </div>
        </div>
    );
})

Search.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onClear: PropTypes.func.isRequired,
}

export default Search;