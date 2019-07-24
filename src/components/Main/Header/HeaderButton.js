import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { FaEllipsisH } from 'react-icons/fa';
import HeaderMenu from '../../../containers/Main/Header/HeaderMenu';

const HeaderButton = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    return (
        <div>
            <Button
                variant="contained"
                style={{
                    minWidth: 30, 
                    color: 'white'
                }}
                onClick={ handleButtonClick }>

                <FaEllipsisH />
            </Button>

            <HeaderMenu
                open={ Boolean(anchorEl) }
                onClose={ handleMenuClose }
                anchorEl={ anchorEl }
            />
        </div>
    );
}

export default HeaderButton;