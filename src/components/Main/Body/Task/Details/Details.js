import React from 'react';
import PropTypes from 'prop-types';

const Details = ({details, listItemDetail=f=>f, renderDetails=f=>f}) => {
    return (
        <ul style={ listItemDetail() }>
            { renderDetails(details) }
        </ul>
    );
};

Details.propTypes = {
    details: PropTypes.array.isRequired,
    listItemDetail: PropTypes.func.isRequired,
    renderDetails: PropTypes.func.isRequired
};
 
export default Details;