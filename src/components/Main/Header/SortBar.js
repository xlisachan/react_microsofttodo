import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';

const SortBar = ({lists, listTitle, onChangeDir=f=>f, onClear=f=>f}) => {
    const selectedList = lists.filter(list => list.name === listTitle)

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
        <div className="sort-bar">
            <div onClick={() => onChangeDir(listTitle)}>
                Sorted { getOrderBy() } { getDirIcon() }
            </div>
            
            <FaTimes onClick={ () => onClear(listTitle) }/>
        </div>
    )
}

SortBar.propTypes = {
    lists: PropTypes.array,
    listTitle: PropTypes.string,
    onChangeDir: PropTypes.func,
    onClear: PropTypes.func
}

export default SortBar;