import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import HeaderName from '../../../containers/Main/Header/HeaderName';
import HeaderButton from './HeaderButton';
import SortBar from '../../../containers/Main/Header/SortBar';

const Header = React.forwardRef(({name, selectedList, formatColor=f=>f, secondaryColor=f=>f}, ref) => {
    return (
        <div>
            <header className="header align-center space-between" style={{backgroundColor: formatColor()}}>
                <div style={{width: '100%'}}>
                    <HeaderName ref={ref} />

                    <span style={{display: name === "My Day" ? 'block' : 'none'}}>
                        { moment(new Date()).format('dddd, MMMM D') }
                    </span>
                </div>

                <HeaderButton buttonColor={ secondaryColor() } />
            </header>

            { selectedList[0].sorted ? <SortBar barColor={ secondaryColor() } /> : null }
        </div>
    );
})

Header.propTypes = {
    name: PropTypes.string.isRequired,
    selectedList: PropTypes.array.isRequired,
    formatColor: PropTypes.func.isRequired,
    secondaryColor: PropTypes.func.isRequired
}

export default Header;