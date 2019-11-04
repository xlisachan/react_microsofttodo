import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

const SortBar = ({barColor, selectedList, selectedListId, getOrderBy=f=>f, getDirIcon=f=>f, onChange=f=>f, onClear=f=>f}) => {
    return selectedList[0].sorted ?
        <div className="sort-bar align-center space-between" style={{ backgroundColor: barColor }}>
            <div onClick={() => onChange(selectedListId)}>
                Sorted { getOrderBy() } { getDirIcon() }
            </div>
            
            <FaTimes onClick={ () => onClear(selectedListId) }/>
        </div>
        :
        null
};

SortBar.propTypes = {
    barColor: PropTypes.string.isRequired,
    selectedListId: PropTypes.string.isRequired,
    getOrderBy: PropTypes.func.isRequired,
    getDirIcon: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
};

export default SortBar;