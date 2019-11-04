import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RightClickMenuSide from './RightClickMenuSideContainer';
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
};

TitleListContainer.propTypes = {
    lists: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(TitleListContainer);