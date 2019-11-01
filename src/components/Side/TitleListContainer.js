import React from 'react';
import { connect } from 'react-redux';
import RightClickMenuSide from '../../components/Side/RightClickMenuSide';
import TitleRow from './TitleRowContainer';
import TitleList from './TitleList';

const TitleListContainer = ({lists, onClick=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    const defaultLists = lists.filter(list => list.defaultList)
    const customLists = lists.filter(list => !list.defaultList)

    const defaults = () =>
        defaultLists.map((list, index) => (
            <TitleRow
                key={list.name + '_' + list.id}
                list={ list }
                index={ index }
                onClick={ onClick }
                onClose={ onClose }
            />
        ))

    const customs = () =>
        customLists.map(list => (
            <RightClickMenuSide
                key={list.name + '_' + list.id}
                list={ list }
                onClick={ onClick }
                onEditClick={ onEditClick }
                onClose={ onClose }
            />
        ))
    
    const renderLists = {
        defaults,
        customs
    }

    return (
        <TitleList renderLists={ renderLists } />
    );
}

const mapStateToProps = state => ({
    lists: state.lists,
})

export default connect(mapStateToProps)(TitleListContainer);