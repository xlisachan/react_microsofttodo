import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, List } from '@material-ui/core';

import SideRightClickMenuSide from './SideRightClickMenuSide';
import SideTitleRow from './SideTitleRow';

const SideTitleList = ({lists, onClick=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    const defaultLists = lists
        .filter(list => list.defaultList)
        .map((list, index) => (
            <SideTitleRow
                index={index}
                key={list.name + '_' + list.id}
                list={list}
                onClick={onClick}
                onClose={onClose}
            />
        ));
    
    const customLists = lists
        .filter(list => !list.defaultList)
        .map(list => (
            <SideRightClickMenuSide
                key={list.name + '_' + list.id}
                list={ list }
                onClick={ onClick }
                onEditClick={ onEditClick }
                onClose={ onClose }
            />
        ))

    return (
        <List className="side-list-titles">
            { defaultLists }

            <Divider style={{margin: 10}} />

            { customLists }
        </List>
    );
};

SideTitleList.propTypes = {
    lists: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    lists: state.lists,
});

export default connect(mapStateToProps)(SideTitleList);
