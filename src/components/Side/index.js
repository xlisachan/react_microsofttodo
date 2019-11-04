import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeQuery, clearQuery } from '../../actions/queryActions';
import Sidebar from './Sidebar';

const SidebarContainer = ({query, onChangeQuery=f=>f, onClear=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    let _searchInput;

    const handleChange = e => {
        onChangeQuery(e.target.value);
        onClose();
    }

    const clearSearch = () => {
        _searchInput.value = '';
        onClear();
    }

    return (
        <Sidebar
            ref={ input => _searchInput = input }
            query={ query }
            onChange={ handleChange }
            onClear={ clearSearch }
            onClose={ onClose }
            onEditClick={ onEditClick }
        />
    )
};

SidebarContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(SidebarContainer);