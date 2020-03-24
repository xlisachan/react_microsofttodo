import React from 'react';
import PropTypes from 'prop-types';
import Name from './NameContainer';
import TodaysDate from './TodaysDate';
import HeaderButton from './MenuButton/HeaderButton';

const Title = React.forwardRef(({name, formatColor, secondaryColor}, ref) => (
    <header className="header align-center space-between" style={{backgroundColor: formatColor()}}>
        <div style={{width: '100%'}}>
            <Name ref={ref} />

            <TodaysDate name={name} />
        </div>

        <HeaderButton buttonColor={ secondaryColor() } />
    </header>
));

Title.propTypes = {
    name: PropTypes.string.isRequired,
    formatColor: PropTypes.func.isRequired,
    secondaryColor: PropTypes.func.isRequired
};
 
export default Title;