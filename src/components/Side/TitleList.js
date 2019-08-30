import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@material-ui/core';

const TitleList = ({renderLists}) => {
    return (
        <List>
            { renderLists.defaults() }

            <Divider style={{margin: 10}} />

            { renderLists.customs() }
        </List>
    );
}

TitleList.propTypes = {
    renderLists: PropTypes.object.isRequired
}
 
export default TitleList;