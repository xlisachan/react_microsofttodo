import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@material-ui/core';
import DateMenu from './DateMenu';

const PlannedMenu = ({ anchorEl, open, onClose, renderMenuItems=f=>f}) => {
    return (
        <Menu
            open={ open }
            onClose={ onClose }
            anchorEl={ anchorEl }>

            { renderMenuItems(DateMenu) }
        </Menu>
    );
}

PlannedMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    anchorElement: PropTypes.any,
    onClose: PropTypes.func.isRequired,
    renderMenuItems: PropTypes.func.isRequired
}

export default PlannedMenu;