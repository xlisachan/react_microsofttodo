import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeDir, changeOrder, resetChangeDir } from '../../../../actions/listsActions';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import SortBar from './SortBar';

const SortBarContainer = ({barColor, lists, selectedList, selectedListId, onChangeDir=f=>f, onClear=f=>f}) => {
    const currentList = lists.filter(list => list.id === selectedListId);

    const getOrderBy = () => {
        const orderBy = currentList[0].orderBy;

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
        return currentList[0].orderDir === 'asc' ?
            <FaChevronUp /> : <FaChevronDown />
    }

    return (
        <SortBar
            barColor={ barColor }
            selectedList={ selectedList }
            selectedListId={ selectedListId }
            getOrderBy={ getOrderBy }
            getDirIcon={ getDirIcon }
            onChange={ onChangeDir }
            onClear={ onClear }
        />
    )
};
    
SortBarContainer.propTypes = {
    barColor: PropTypes.string.isRequired,
    lists: PropTypes.array.isRequired,
    selectedList: PropTypes.array.isRequired,
    selectedListId: PropTypes.string.isRequired,
    onChangeDir: PropTypes.func.isRequired,
    onClear: PropTypes.func.isRequired
};
    
const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
});

const mapDispatchToProps = dispatch => ({
    onChangeDir(id) {
        dispatch(
            changeDir(id)
        )
    },

    onClear(id) {
        dispatch(
            changeOrder('date_created', id)
        )

        dispatch(
            resetChangeDir(id)
        )
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortBarContainer);