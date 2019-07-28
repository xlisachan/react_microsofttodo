import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@material-ui/core';
import TitleRow from '../../containers/Side/TitleRow';
import RightClickMenuSide from '../../containers/Side/RightClickMenuSide';

const TitleList = ({lists, onClick=f=>f}) => {
    const defaultLists = lists.filter(list => list.defaultList)
    const customLists = lists.filter(list => !list.defaultList)

    return (
        <List>
            { defaultLists.map((list, index) => (
                <TitleRow
                    key={list.name + '_' + list.id}
                    list={ list }
                    index={ index }
                    onClick={ onClick }
                />
            ))}

            <Divider />

            { customLists.map(list => (
                <RightClickMenuSide
                    key={list.name + '_' + list.id}
                    list={ list }
                    onClick={ onClick }
                />
            ))}
        </List>
    );
}

TitleList.propTypes = {
    lists: PropTypes.array.isRequired,
    onClick: PropTypes.func,
}
 
export default TitleList;