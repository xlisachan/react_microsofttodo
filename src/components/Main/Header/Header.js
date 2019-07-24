import React from 'react';
import PropTypes from 'prop-types';

const Header = ({listTitle, todaysDate}) => {
    return (
        <header className="header">
            <div>
                <h2 style={{ fontWeight: 'bold'}}>
                    { listTitle }
                </h2>

                <span style={{display: listTitle === "My Day" ? 'inline' : 'none'}}>
                    { todaysDate }
                </span>
            </div>
        </header>
    );
}

Header.propTypes = {
    listTitle: PropTypes.string.isRequired,
    todaysDate: PropTypes.string
}

export default Header;