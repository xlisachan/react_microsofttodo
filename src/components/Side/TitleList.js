import React from 'react';
import PropTypes from 'prop-types';
import { Divider, List } from '@material-ui/core';

const TitleList = ({renderLists}) => {
    return (
        <List className="list-titles" style={{height: '82vh', overflow: 'auto', paddingBottom: 60}}>
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