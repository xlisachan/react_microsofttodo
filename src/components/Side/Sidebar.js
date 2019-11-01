import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import TitleList from './TitleListContainer';
import AddList from '../../components/Side/AddListContainer';

const Sidebar = React.forwardRef(({query, onChange=f=>f, onClear=f=>f, onClose=f=>f, onEditClick=f=>f}, ref) => {
    return (
        <div>
            <div className="search-bar">
                <Search ref={ ref } query={ query } onChange={ onChange } onClear={ onClear } />
            </div>

            <div className="list-titles">
                <TitleList onClick={ onClear } onClose={ onClose } onEditClick={ onEditClick } />
            </div>

            <AddList onEditClick={ onEditClick } onClose={ onClose } />
        </div>
    );
})

Sidebar.propTypes = {
    query: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func
}

export default Sidebar;