import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';

const SortBar = ({barColor, lists, selectedListId, onChangeDir=f=>f, onClear=f=>f}) => {
    const selectedList = lists.filter(list => list.id === selectedListId);

    const getOrderBy = () => {
        const orderBy = selectedList[0].orderBy;

        const dict = {
            'importantStatus': 'by importance',
            'item': 'alphabetically',
            'date_due': 'by due date',
            'date_created': 'by creation date',
            'completedStatus': 'by completed',
            'my_day': 'by added to My Day'
        }

        return dict[orderBy];
    }

    const getDirIcon = () => {
        return selectedList[0].orderDir === 'asc' ?
            <FaChevronUp /> : <FaChevronDown />
    }

    return (
        <div className="sort-bar"
            style={{ backgroundColor: barColor }}>
            <div onClick={() => onChangeDir(selectedListId)}>
                Sorted { getOrderBy() } { getDirIcon() }
            </div>
            
            <FaTimes onClick={ () => onClear(selectedListId) }/>
        </div>
    )
}

SortBar.propTypes = {
    lists: PropTypes.array,
    selectedListId: PropTypes.string.isRequired,
    onChangeDir: PropTypes.func,
    onClear: PropTypes.func,
    barColor: PropTypes.string.isRequired
}

export default SortBar;