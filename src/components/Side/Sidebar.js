import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import TitleList from '../../containers/Side/TitleList';
import AddList from '../../containers/Side/AddList';

const Sidebar = ({query, onChangeQuery=f=>f, onClear=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    let _searchInput;

    const handleChange = e => {
        onChangeQuery(e.target.value);
    }

    const clearSearch = () => {
        _searchInput.value = '';
        onClear();
    }

    return (
        <div>
            <Search ref={ input => _searchInput = input } query={ query } onChangeQuery={ handleChange } onClear={ clearSearch } />

            <TitleList onClick={ clearSearch } onClose={ onClose } onEditClick={ onEditClick } />

            <AddList onEditClick={ onEditClick } onClose={ onClose } />
        </div>
    );
}

Sidebar.propTypes = {
    query: PropTypes.string.isRequired,
    onChangeQuery: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func
}

export default Sidebar;