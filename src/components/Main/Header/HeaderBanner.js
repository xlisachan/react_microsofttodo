import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FaEllipsisH } from 'react-icons/fa';
import { Button } from '@material-ui/core';

import HeaderButtonMenu from './HeaderButtonMenu';
import HeaderTitle from './HeaderTitle';

const HeaderBanner = React.forwardRef(({ name, formatColor, secondaryColor }, ref) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <header className="main-header align-center space-between" style={{ backgroundColor: formatColor }}>
            <div style={{ width: '100%' }}>
                <HeaderTitle ref={ref} />

                {name === "My Day" ?
                    <span>
                        {moment(new Date()).format('dddd, MMMM D')}
                    </span>
                    :
                    null
                }
            </div>

            <div className="header-banner-button">
                <Button
                    variant="contained"
                    style={{
                        minWidth: 30,
                        color: 'white',
                        backgroundColor: secondaryColor()
                    }}
                    onClick={handleButtonClick}>

                    <FaEllipsisH />
                </Button>

                <HeaderButtonMenu
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorEl={anchorEl}
                />
            </div>
        </header>
    )
});

HeaderBanner.propTypes = {
    name: PropTypes.string.isRequired,
    formatColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.func.isRequired
};
 
export default HeaderBanner;