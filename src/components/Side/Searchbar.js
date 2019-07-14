import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';

const useStyles = makeStyles(theme => ({
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

const SearchBar = ({onChangeQuery=f=>f, onClearQuery=f=>f}) => {
    const classes = useStyles();
    const [searchItem, setSearchItem] = useState('');

    let _searchInput;

    const handleChange = e => {
        setSearchItem(e.target.value);
        onChangeQuery(e.target.value);
    }

    const clearSearch = () => {
        _searchInput.value = '';
        setSearchItem('');
        onClearQuery();
    }

    const renderClearButton = () => {
        return !searchItem ?
            null
            :
            <FaTimesCircle 
                style={{fontSize: '1rem'}}
                onClick={ clearSearch }
            />
    }

    return (
        <div 
            className={classes.search} 
            style={{width: '90%', margin: 'auto'}}
            >

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
                inputRef={ input => _searchInput = input }
                onChange={ handleChange }
            />

            { renderClearButton() }
            
        </div>
    );
}

SearchBar.propTypes = {
    onChangeQuery: PropTypes.func,
    onClearQuery: PropTypes.func
}

export default SearchBar;