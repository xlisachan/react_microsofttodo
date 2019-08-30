import React from 'react';
import { connect } from 'react-redux';
import { changeDir, changeOrder, resetChangeDir } from '../../../actions';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import SortBar from '../../../components/Main/Header/SortBar';

const SortBarContainer = ({barColor, lists, selectedListId, onChangeDir=f=>f, onClear=f=>f}) => {
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
        <SortBar
            barColor={ barColor }
            selectedListId={ selectedListId }
            getOrderBy={ getOrderBy }
            getDirIcon={ getDirIcon }
            onChange={ onChangeDir }
            onClear={ onClear }
        />
    )
}
    
const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
})

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
    
})

export default connect(mapStateToProps, mapDispatchToProps)(SortBarContainer);