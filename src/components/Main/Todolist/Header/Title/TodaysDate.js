import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const TodaysDate = ({name}) => (
    <span style={{display: name === "My Day" ? 'block' : 'none'}}>
        { moment(new Date()).format('dddd, MMMM D') }
    </span>
);

TodaysDate.propTypes = {
    name: PropTypes.string.isRequired
};

export default TodaysDate;