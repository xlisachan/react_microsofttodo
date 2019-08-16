import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@material-ui/core';
import TitleRow from '../../containers/Side/TitleRow';
import RightClickMenuSide from '../../containers/Side/RightClickMenuSide';

const TitleList = ({lists, onClick=f=>f, onClose=f=>f, onEditClick=f=>f}) => {
    const defaultLists = lists.filter(list => list.defaultList)
    const customLists = lists.filter(list => !list.defaultList)

    const renderDefaultLists = () =>
        defaultLists.map((list, index) => (
            <TitleRow
                key={list.name + '_' + list.id}
                list={ list }
                index={ index }
                onClick={ onClick }
                onClose={ onClose }
            />
        ))

    const renderCustomLists = () =>
        customLists.map(list => (
            <RightClickMenuSide
                key={list.name + '_' + list.id}
                list={ list }
                onClick={ onClick }
                onEditClick={ onEditClick }
                onClose={ onClose }
            />
        ))

    return (
        <List>
            { renderDefaultLists() }

            <Divider style={{margin: 10}} />

            { renderCustomLists() }
        </List>
    );
}

TitleList.propTypes = {
    lists: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired
}
 
export default TitleList;