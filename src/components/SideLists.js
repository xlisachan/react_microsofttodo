import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, List } from '@material-ui/core';

import CustomList from './SideCustomList';
import TitleRow from './SideListItem';

const SideLists = ({lists, onClick=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    const defaultLists = lists
        .filter(list => list.defaultList)
        .map((list, index) => (
            <TitleRow
                key={list.name + '_' + list.id}
                list={ list }
                index={ index }
                onClick={ onClick }
                onClose={ onClose }
            />
        ))

    const customLists = lists
        .filter(list => !list.defaultList)
        .map(list => (
            <CustomList
                key={list.name + '_' + list.id}
                list={ list }
                onClick={ onClick }
                onEditClick={ onEditClick }
                onClose={ onClose }
            />
        ))

    return (
        <List className="side-lists">
            { defaultLists }

            <Divider style={{margin: 10}} />

            { customLists }
        </List>
    );
};

SideLists.propTypes = {
    lists: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(SideLists);