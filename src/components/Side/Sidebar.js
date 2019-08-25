import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import TitleList from '../../containers/Side/TitleList';
import AddList from '../../containers/Side/AddList';

const Sidebar = ({onChangeQuery=f=>f, onClear=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    const [searchItem, setSearchItem] = useState('');
    let _searchInput;

    const handleChange = e => {
        setSearchItem(e.target.value);
        onChangeQuery(e.target.value);
    }

    const clearSearch = () => {
        _searchInput.value = '';
        setSearchItem('');
        onClear();
    }

    return (
        <div>
            <Search ref={ input=> _searchInput = input} searchItem={ searchItem } onChangeQuery={ handleChange } onClear={ clearSearch } />

            <TitleList onClick={ clearSearch } onClose={ onClose } onEditClick={ onEditClick } />

            <AddList onEditClick={ onEditClick } />
        </div>
    );
}

Sidebar.propTypes = {
    onChangeQuery: PropTypes.func,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func
}

export default Sidebar;